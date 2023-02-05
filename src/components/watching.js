/** @jsxRuntime classic */
/** @jsx jsx */ 

import React, { useEffect, useState } from "react";
import { jsx, Box } from 'theme-ui';
import { ethers } from "ethers";
import axios from "axios";
import { useRouter } from 'next/router'
import { useNavigate, useLocation } from "react-router-dom";
import Web3Modal from "web3modal";
import { Player } from '@livepeer/react';
import Image from 'next/image';
import { rgba } from 'polished';
import ShareLink from "react-twitter-share-link";
import Popup from 'reactjs-popup';
//import 'reactjs-popup/dist/index.css';

//import blenderPoster from '../../public/images/logo.png';
import fileNFT from "../../artifacts/contracts/Artifacts.sol/Artifacts.json";
import { ArtifactsAddress } from "../../config";

const containerStyle = {
  position: "relative",
  overflow: "hidden",
  width: "100%",
  //paddingTop: "56.25%", /* 16:9 Aspect Ratio (divide 9 by 16 = 0.5625) */
};
const responsiveIframe = {
  position: "absolute",
  top: "0",
  left: "0",
  bottom: "0",
  right: "0",
  width: "100%",
  height: "100%",
};

export default function Watching() {
  console.log('Entered watching component');
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState(null);
  const [nfts, setNfts] = useState([]);
  const [owners, setOwners] = useState([]);
  const [ensName, setEnsName] = useState([]);
  const [loadingState, setLoadingState] = useState("not-loaded");
  useEffect(() => {
    // eslint-disable-next-line no-use-before-define
    loadPaper();
    loadCount();
    console.log("Counter executed")
  }, []);

  const getId = (props) => {
    console.log(props);
    return props;
  };

  async function Live() {
    router.push("/dashboardLive");
  }
  async function Claim() {
    alert("This feature is under development because we want to give you the best expereince");
  }

  const rpcUrl = "https://filecoin-hyperspace.chainstacklabs.com/rpc/v1";
  // const rpcUrl = "https://api.hyperspace.node.glif.io/rpc/v1";
   // const rpcUrl = "localhost";

   const { query: pid } = router; 
   const props =  pid ;
   console.log('Props result is without ', props.pid);

  async function loadPaper() {
    /* create a generic provider and query for items */
    console.log("loading Article for item", props.pid);
    const pid = props.pid;
    console.log("pid is ", pid);

    const web3Modal = new Web3Modal({
      network: 'mainnet',
      cacheProvider: true,
    })
    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(ArtifactsAddress, fileNFT.abi, signer);
    const data = await contract.fetchOneArtifact(pid);
    const data2 = await contract.fetchItemViews(pid);

    /*
    *  map over items returned from smart contract and format
    *  them as well as fetch their token metadata
    */
    const items = await Promise.all(data.map(async i => {
      console.log("inside data mapping");
      const tokenUri = await contract.tokenURI(i.tokenId);
      console.log("token Uri is ", tokenUri);
      const httpUri = getIPFSGatewayURL(tokenUri);
      console.log("Http Uri is ", httpUri);
      const meta = await axios.get(httpUri);
      
      //getENSName();
      const count = (data2.toNumber())
      const filename = i.fileName;
      console.log("Filename is ", filename);
      const description = i.description;
      console.log("description is ", description);

      const item = {
        tokenId: i.tokenId.toNumber(),
        image: getIPFSGatewayURL(meta.data.image),
        name: meta.data.name,
        description: meta.data.description,
        author: meta.data.properties.author,
        category: meta.data.properties.category,
        type: meta.data.type,
        affiliate: meta.data.properties.affiliate,
        sharelink: httpUri,
        view: count,
      };
      console.log("item returned is ", item);
      setOwners(item.owner);
      return item;
    }));
    setNfts(items);
    setLoadingState("loaded");

  }
  const getIPFSGatewayURL = (ipfsURL) => {
    const urlArray = ipfsURL.split("/");
    const ipfsGateWayURL = `https://${urlArray[2]}.ipfs.nftstorage.link/${urlArray[3]}`;
    return ipfsGateWayURL;
  };

  async function loadCount() {
    /* create a generic propider and query for items */
      console.log("loading News for item", props.pid);
    const pid = props.pid;
    console.log("pid is ", pid);

    try {
      //setTxStatus("Adding transaction to Polygon Mumbai..");
      const web3Modal = new Web3Modal();
      const connection = await web3Modal.connect();
      const provider = new ethers.providers.Web3Provider(connection);
      const connectedContract = new ethers.Contract(ArtifactsAddress, fileNFT.abi, provider.getSigner());
      console.log("Count variable is ", pid);

      const mintNFTTx = await connectedContract.createViewItem(pid);
      console.log("View Counter successfully retrieved from Blockchain");
      await mintNFTTx.wait();
      return mintNFTTx;
    } catch (error) {
      setErrorMessage("Failed to send tx to Filecoin.");
      console.log(error);
    }
 
  };

  const PosterImage = () => {
    return (
      <Image
        src={blenderPoster}
        layout="fill"
        objectFit="cover"
        priority
        placeholder="blur"
      />
    );
  };

  if (loadingState === "loaded" && !nfts.length) {
    return (
      <div>
    
        <h1 className="px-20 py-10 text-3xl">You have not selected anyvideo to watch</h1>
        
      </div>
    );
  }
  return (
    <Box as="section"  sx={styles.section} className="bg-blue-800 ">
    <>
    <div className=" text-2xl text-center text-white font-bold ">
        <h1>Article Review Details</h1>
      </div>
      <div className="grid grid-cols-3 grid-rows-2 col-gap-2 row-gap-5 mx-20 my-5">

	<div className="col-start-1 col-end-3 row-span-2 text-white bg-white text-4xl flex items-center justify-center border-4 border-red-500" style={containerStyle}>

  <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-4 pt-1" style={responsiveIframe}>
    {nfts.map((nft, i) => (
    <div key={i} className="shadow rounded-xl overflow-hidden w-full " >
                <iframe
                  title={nft.name}
                  frameBorder="0"
                  scrolling="no"
                  height="950px"
                  width="100%"
                  objectFit="cover"
                  src={`${nft.image}#toolbar=0`}
                  //className="object-cover h-500 w-full"
                />

    </div>
  ))
}
</div>
    
  </div>

	<div className="row-span-3 text-black bg-white text-2xl flex text-left p-3 ">
    
    {nfts.map((nft, i) => (
    <div key={i} className="overflow-auto tect-blue-800  bg-white shadow rounded-xl font-bold">
      <div className=" bg-white shadow rounded-xl overflow-hidden min-w-full" >
    <Player
      title={nft.name}
      src={nft.sharelink}
      //playbackId="6d7el73r1y12chxr"
      //autoUrlUpload={{ fallback: true, ipfsGateway: 'https://w3s.link' }}
      //poster={<PosterImage />}
      //showPipButton
      objectFit="fill"
      //priority
    />
    </div>
    <br/>

      <div className="p-1">
        <p style={{ height: "20px" }} className="text-3xl font-semibold underline">Article Details</p>
      </div>
      <br/>
      <div className="p-1">
        <p style={{ height: "20px" }} className="text-xl font-semibold"> No. of Views : {nft.view}</p>
      </div>

      <br/>
      <div className="p-1">
        <p style={{ height: "20px" }} className="text-xl font-semibold">Article id: {nft.tokenId}</p>
      </div>
      <br/>
      <div className="p-1">
        <p style={{ height: "40px" }} className="text-xl font-semibold">Article Name : {nft.name}</p>
      </div>
      <br/>
      <div className="p-1">
        <p style={{ height: "100px" }} className="text-xl font-semibold">Abstract: {nft.description}</p>
      </div>
      <br/>
      <div className="p-1">
        <p style={{ height: "20px" }} className="text-xl font-semibold">Author: {nft.author}</p>
      </div>
      <br/>
      <div className="p-1">
        <p style={{ height: "20px" }} className="text-xl font-semibold"> Paper Type: {nft.type}</p>
      </div>
      <br/>
      <div className="p-1">
        <p style={{ height: "20px" }} className="text-xl font-semibold"> Category: {nft.category}</p>
      </div>
      <br/>
      <div className="p-1">
        <p style={{ height: "20px" }} className="text-xl font-semibold">affiliate: {nft.affiliate}</p>
      </div>
      <br/>
      <div className="p-1 mb-5">
        <p style={{ height: "20px" }} className="text-xl font-semibold">IPFS Link : {nft.sharelink}</p>
      </div>
      <br/>


    </div>
  ))}
   </div>

  
		<div className="col-span-3 text-white pt-3  text-xl flex items-center justify-center">

    <div className="p-4">
                  <button type="button" className="w-full bg-blue-800 text-white font-bold py-2 px-12 border-b-4 border-blue-200 hover:border-blue-500 rounded-full" onClick={() => Claim()}>Drop your comment</button>
                </div>
                <div className="p-4">
                  <button type="button" className="w-full bg-blue-800 text-white font-bold py-2 px-12 border-b-4 border-blue-200 hover:border-blue-500 rounded-full">
                    <a
                      className="social-icon-link github"
                      href="https://streamagenic-meeting.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="chat"
                    >Vote NO 
                    </a>
                  </button>
                </div>
                <div className="p-4">
                  <button type="button" className="w-full bg-blue-800 text-white font-bold py-2 px-12 border-b-4 border-blue-200 hover:border-blue-500 rounded-full">
                    <a
                      className="social-icon-link github"
                      href="https://web3chat-holyaustin.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="chat"
                    >Vote YES 
                    </a>
                  </button>
                </div>
                {/**
                <div className="p-4">
                <ShareLink link="https://streamagenic.vercel.app/explore" text="News on Demand from eye witness all around the globe!" hashtags="blockchaintechnology streamagenic Livepeer holyaustin IPFS">
              {(link) => (
                  <button type="button" className="w-full bg-blue-800 text-white font-bold py-2 px-12 border-b-4 border-blue-200 hover:border-blue-500 rounded-full">                   
                  <a href={link} target="_blank" rel="noreferrer">Share on Twitter</a></button>
                  )}
            </ShareLink>
                </div>

                 */}

            
    </div>

   
</div>
    </>
      </Box>
  );
}

const styles = {
  section: {
    backgroundColor: 'primary',
    pt: [17, null, null, 20, null],
    pb: [6, null, null, 12, 16],
  },
 };
