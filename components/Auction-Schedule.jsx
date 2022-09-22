import React, { useEffect, useState } from 'react';
import { PolkadotAuctions, KusamaAuctions } from './utilities/auctions';
import { ApiPromise, WsProvider } from "@polkadot/api";

let options = [];
let wsProvider = undefined;

// Component for displaying auction data
function AuctionSchedule() {
	const [auctions, setAuctions] = useState("Loading Auctions...");

	useEffect(async () => {
		const title = document.title;
		if (title === "Parachain Slot Auctions · Polkadot Wiki") {
			const chain = "Polkadot";
			wsProvider = new WsProvider("wss://rpc.polkadot.io");
			LoadOptions(PolkadotAuctions);
			LoadCacheThenUpdate(chain, PolkadotAuctions, setAuctions, { target: { value: 0 } })
		}
		else if (title === "Parachain Slot Auctions · Guide") {
			const chain = "Kusama";
			wsProvider = new WsProvider("wss://kusama-rpc.polkadot.io");
			LoadOptions(KusamaAuctions);
			LoadCacheThenUpdate(chain, KusamaAuctions, setAuctions, { target: { value: 0 } })
		}
		else {
			console.log("Unknown wiki/guide type");
		}
	}, []);

	// Render
	if (auctions !== undefined) {
		return auctions;
	} else {
		return (<div>Loading auction data...</div>)
	}
}

// Loads hard-coded auction default values
function LoadOptions(auctions) {
	for (let i = 0; i < auctions.length; i++) {
		const option = <option value={i} key={i}>{auctions[i].option}</option>
		options.push(option);
	}
}

// Renders default value prior to initializing on-chain retrieval
async function LoadCacheThenUpdate(chain, defaultAuctions, setAuctions, e) {
	const index = e.target.value;
	const auctions = Render(chain, defaultAuctions, setAuctions, index);
	await GetChainData(chain, auctions, setAuctions, index)
}

// Update JSX
function Render(chain, auctions, setAuctions, index) {
	let content = <div>Failed to load auction data...</div>

	// TODO - this should be the same for both chains, however the original tool
	// only provided limited hard-coded data for Kusama
	if (chain === "Polkadot") {
		content = <div>
			<select id="AuctionSelector" onChange={(e) => LoadCacheThenUpdate(chain, auctions, setAuctions, e)} style={{ border: '2px solid #e6007a', height: '40px' }}>
				{options.map((option) => (option))}
			</select>
			<hr />
			<b>Auction Starts:</b>
			<br />
			{`${auctions[index].startDate} - `}
			<a href={`https://polkadot.subscan.io/block/${auctions[index].startBlock.substring(1)}`}>
				Block {auctions[index].startBlock}
			</a>
			<hr />
			<b>Auction Ends:</b>
			<br />
			{`${auctions[index].endPeriodDate} - `}
			<a href={`https://polkadot.subscan.io/block/${auctions[index].endPeriodBlock.substring(1)}`}>
				Block {auctions[index].endPeriodBlock}
			</a>
			<hr />
			<b>Bidding Ends:</b>
			<br />
			{`${auctions[index].biddingEndsDate} - `}
			<a href={`https://polkadot.subscan.io/block/${auctions[index].biddingEndsBlock.substring(1)}`}>
				Block {auctions[index].biddingEndsBlock}
			</a>
			<hr />
			<b>Winning parachain(s) onboarded:</b>
			<br />
			{auctions[index].onboard}
			<hr />
			<p style={{ color: "#6c757d" }}>
				The dates (based on UTC) and block numbers listed above can change based on network block production and the potential for skipped blocks.
				Click on the block number for an up-to-date estimate.
			</p>
		</div>
	} else if (chain === "Kusama") {
		content = <div>
			<select id="AuctionSelector" onChange={(e) => LoadCacheThenUpdate(chain, auctions, setAuctions, e)} style={{ border: '2px solid #e6007a', height: '40px' }}>
				{options.map((option) => (option))}
			</select>
			<hr />
			<b>Auction Starts:</b>
			<br />
			<a href={`https://kusama.subscan.io/block/${auctions[index].startBlock.substring(1)}`}>
				Block {auctions[index].startBlock}
			</a>
			<hr />
			<b>Bidding Ends:</b>
			<br />
			<a href={`https://kusama.subscan.io/block/${auctions[index].biddingEndsBlock.substring(1)}`}>
				Block {auctions[index].biddingEndsBlock}
			</a>
			<hr />
			<p style={{ color: "#6c757d" }}>
			The block numbers listed above can change based on network block production and the potential for skipped blocks.
			Click on the block number for an estimate of the date and time.
			</p>
		</div>
	}

	setAuctions(content);
	return auctions;
}

// Connect to a chain, retrieve required values, re-render
async function GetChainData(chain, auctions, setAuctions, index) {
	const api = await ApiPromise.create({ provider: wsProvider });

	// Get the current block for projection
	const currentBlock = await api.rpc.chain.getBlock();
	const currentBlockNumber = currentBlock.block.header.number.toPrimitive();

	// Get current on-chain date/time
	const chainTimestamp = await api.query.timestamp.now();
	const date = new Date(chainTimestamp.toPrimitive());

	// Get chain data for the current selection
	let auction = {};

	// Blocks
	auction.startBlock = auctions[index].startBlock;
	const startHash = await api.rpc.chain.getBlockHash(auctions[index].startBlock.substring(1));
	const apiAt = await api.at(startHash.toString());
	const endPeriod = apiAt.consts.auctions.endingPeriod.toPrimitive();
	const [lease, end] = (await apiAt.query.auctions.auctionInfo()).toJSON();
	const weeksLeased = lease;
	auction.endPeriodBlock = `#${end.toString()}`;
	auction.biddingEndsBlock = `#${(end + endPeriod).toString()}`;

	// Dates
	// TODO - estimates should only be made for future block, otherwise use on-chain timestamp
	if (currentBlockNumber > parseInt(auctions[index].startBlock.substring(1))) {
		console.log("start block has already occurred");
	} else {
		console.log("start block has not yet occurred");
	}
	auction.startDate = EstimateBlockDate(date, currentBlockNumber, auction.startBlock.substring(1));
	auction.endPeriodDate = EstimateBlockDate(date, currentBlockNumber, auction.endPeriodBlock.substring(1));
	auction.biddingEndsDate = EstimateBlockDate(date, currentBlockNumber, auction.biddingEndsBlock.substring(1));
	auction.onboard = "TEST";
	// TODO - how to get this value?
	//auction.startOnBoard = "test1";
	//auction.endOnBoard = "test2";
	//auction.endOnBoard = weeksLeased * 7 + auction.startOnBoard;

	// Swap hard-coded data for on-chain at drop-down index
	auctions[index] = auction;

	Render(chain, auctions, setAuctions, index);
}

// Estimate a future blocks date based on 6 second block times
function EstimateBlockDate(date, currentBlock, estimatedBlock) {
	const blockDifference = estimatedBlock - currentBlock;
	const seconds = blockDifference * 6;
	let dateCopy = new Date(date.valueOf())
	dateCopy.setSeconds(dateCopy.getSeconds() + seconds);
	return dateCopy.toString();
}

export default AuctionSchedule;