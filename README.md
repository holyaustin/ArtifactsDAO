# ArtifactsDAO : DataDAO for DeSci Projects build on top of FVM

![Genic](https://bafkreic64ckzeog4qh635g2udaife6sq447tpnzdzms3lcnp4ti6hc6cjm.ipfs.w3s.link/)

## Introduction

DataDAO for Decentralized Science (DeSci) Projects build on top of FEVM. DataDAOs are DAOs whose mission revolves around the preservation, curation, augmentation, and promotion of datasets considered valuable by their stakeholders.
Decentralized Science [through DataDAOs]
DataDAOs can be used to store open-access papers and journals. They can store (as proof) the results of reproducible experiments and provide incentives for scientists to upload new papers over time. They can raise funds for research that are unorthodox or come from a unique source.

Can the peer review process be made more fair (perhaps through quadratic voting)?

How can scientific code be made reproducible? Often these are written as one-off scripts and can be hard to recreate, even for famous publications.

We also need to enable massive scale data science on the data collected on these papers. We can make metadata analysis really easy because the data collected in a DeSci DAO can be analyzed and imputed on in a straightforward manner.

## Web 3.0 technologies Used

Frontend: NextJS, postcss, tailwindcss, Theme, Spheron, 

Web3 technologies: IPFS/filecoin (Hyperspace), , Web3Modal, Huddle01  
Backend: Solidity, Node.js, tableland, tellor, polybase, lit

Blockchain deployed to:  FEVM Hyperspace testnet

## Description

 A decentralized Science (DeSci) Peer Review DataDAO for Publishing scientific papers and the results of their reproducible experiments (Artifacts) while providing incentives for scientists to upload new papers over time. Papers and artifacts are stored as open-access journals. They can store (as proof) various artifacts from their experiment. DAO members can raise funds for research that are unorthodox or come from a unique source. Artifacts are stored on Filecoin using Filecoin's service provider (SP) data deals and they are also rewarded.

The smart contract uses ERC-721 specification to hold metadata URI for papers published, The DataDAO contract for SP reward was also developed. DAO members vote for reserach work that would be includeded into the artifcats repository. ethers.js was used to interact with the smart contract. The contract was deployed to Hyperspace Teatnet on Filecoin EVM blockchain. The entire project demo was hosted on Spheron and Vercel.

## Live DApp hosted on

Live Dapp on Vercel <https://artifactsdao-8de3b5.spheron.app/>

Live Dapp on Vercel: - <https://artifacts-dao.vercel.app/>

Deployed to Hyperspace Testnet:
Artifacts deployed Address = "0xd853c72d627845B59a3Fc9880eEcF50D699bcBEB"

Deploying Artifacts...
Artifacts Contract deployed to: 0xd853c72d627845B59a3Fc9880eEcF50D699bcBEB
Deploying FilecoinMarketConsumer...
FilecoinMarketConsumer Contract  deployed to: 0x1B7a6536f23a16e198246A3f80Cd646f86856F11
Deploying DealRewarder...
DealRewarder Contract  deployed to: 0x60cF847C6Ea49009ae290F749451F4CB66CAD0B2

 Youtube video link: <https://youtu.be/84Yt6xQ-o2Y> 

## Connect with me and send me a mail

E-mail - holyaustin@yahoo.com

stay connected on twitter @holyaustin

<https://live-par-1-abr-cdn.livepush.io/live_abr_cdn/emaIqCGoZw-6/index.m3u8>

https://api.hyperspace.node.glif.io/rpc/v0

bafkreic64ckzeog4qh635g2udaife6sq447tpnzdzms3lcnp4ti6hc6cjm  logolong
bafkreifossblen6jiywnkj5c6mv4yuvfth6cotkwkprpgglpr5bnx5e2u4 logoonly

Ethereum address (this addresss should work for most tools): 0xa6D6f4556B022c0C7051d62E071c0ACecE5a1228
f4address (also known as t4 address on testnets): f410fu3lpivllaiway4cr2yxaohakz3hfueri6eecg6i
Done in 5.89s.

Nothing to compile
Wallet Ethereum Address: 0xa6D6f4556B022c0C7051d62E071c0ACecE5a1228
Deploying Artifacts...
Artifacts deployed to: 0x5E4e5347eB417982375Ef9BDe0B77F4322FCF79F
Deploying FilecoinMarketConsumer...
FilecoinMarketConsumer deployed to: 0x1B7a6536f23a16e198246A3f80Cd646f86856F11
Deploying DealRewarder...
DealRewarder deployed to: 0x60cF847C6Ea49009ae290F749451F4CB66CAD0B2

DealClient: 0x506eb3bF021C4a2Cf23aD212671AC7054B487D60


Upload details

pieceCid: baga6ea4seaqjleoo7ald6z6ow7r6zhjeajictrpmik4yatt6qndejkd55tjtmmi
fileName: AnomalyDetection.pdf
payloadCid: bafybeihbbl3lwmgbe2w6tghph6jsgaanrtho63mmadoznbikxf7vkd6mai
mimeType: application/pdf
createdAt: 1685015244464
carSize: 613349
lastUpdate: 1685015245521
fileStatus: CAR Created
fileSize: 613144
id: 48b05f5a-e750-4eb4-9e67-85b492c0b16f
pieceSize: 1048576

car CID: bafybeigougc4wofed3vuufqkknuogbkq5bw4koyv26y4zmlcvwjkzacctu
http url: <https://bafybeigougc4wofed3vuufqkknuogbkq5bw4koyv26y4zmlcvwjkzacctu.ipfs.w3s.link/ipfs/bafybeigougc4wofed3vuufqkknuogbkq5bw4koyv26y4zmlcvwjkzacctu/48b05f5a-e750-4eb4-9e67-85b492c0b16f.car>

Creating a Deal Proposal Payload
  const DealRequestStruct = [
    "baga6ea4seaqjleoo7ald6z6ow7r6zhjeajictrpmik4yatt6qndejkd55tjtmmi", // pieceCID (Generated in previous step)
    1048576, // pieceSize (Generated in previous step)
    false, // verifiedDeal (whether the deal has datacap or not)
    "baga6ea4seaqjleoo7ald6z6ow7r6zhjeajictrpmik4yatt6qndejkd55tjtmmi", // DataCID (generated in previous step)
    520000, // startEpoch (when you want the storage to start)
    1555200, // endEpoch (when you want the storage to end)
    0, // storagePricePerEpoch (how much attoFIL per GiB per 30s you are offering for this deal, set to 0 for a free deal)
    0, // providerCollateral (how much collateral the provider must put up for the deal)
    0, // clientCollateral (how much collateral you, the client, must put up for the deal)
    1, // extraParamsVersion (set to 1)
    extraParamsV1, // see below
  ];

    const extraParamsV1 = [
    "https://bafybeigougc4wofed3vuufqkknuogbkq5bw4koyv26y4zmlcvwjkzacctu.ipfs.w3s.link/ipfs/bafybeigougc4wofed3vuufqkknuogbkq5bw4koyv26y4zmlcvwjkzacctu/48b05f5a-e750-4eb4-9e67-85b492c0b16f.car", // carLink (Generated in previous step)
    613349, // carSize (Generated in previous step).
    false, // skipIpniAnnounce (whether or not the deal should be announced to IPNI indexers, set to false)
    false, // removeUnsealedCopy (whether or not the storage provider should remove an unsealed copy. Set to false)
  ];

  Deal: https://hyperspace.filfox.info/en/deal/1824