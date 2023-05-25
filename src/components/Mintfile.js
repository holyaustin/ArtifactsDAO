/** @jsxRuntime classic */
/** @jsx jsx */

import React, { useState } from "react";
import { jsx, Box } from 'theme-ui';
import { NFTStorage } from "nft.storage";
import { useRouter } from 'next/router'
import { ethers } from "ethers";
import Web3Modal from "web3modal";
import { Polybase } from "@polybase/client";
import { Database } from "@tableland/sdk";
import SpheronClient, { ProtocolEnum } from "@spheron/storage"; 
import axios from 'axios'
import { rgba } from 'polished';
import { Wallet, providers } from "ethers";

import 'dotenv/config';
import fileNFT from "../../artifacts/contracts/Artifacts.sol/Artifacts.json";
import { ArtifactsAddress } from "../../config";
// const APIKEY = [process.env.NFT_STORAGE_API_KEY];
const APIKEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDA4Zjc4ODAwMkUzZDAwNEIxMDI3NTFGMUQ0OTJlNmI1NjNFODE3NmMiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY1MzA1NjE4NzM4MCwibmFtZSI6InBlbnNpb25maSJ9.agI-2V-FeK_eVRAZ-T6KGGfE9ltWrTUQ7brFzzYVwdM";

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlLZXkiOiI3NTBjMmQ3NTg0MTI3ZjlmMWZiNDM0ZGE1N2EwZTVmZjY0MDczY2FjMjg1NGZhZDVjYzllM2U0YmZjNDI2NWQzNGE1ZWRhMjEyODJjNzQzZTc1MGU4M2VlMTM3N2E3NmY3NmNmNWIyMmFhNzAxODFkZWZhZjg1NTFhYjMzNjRhNCIsImlhdCI6MTY4NTAzMTQyOCwiaXNzIjoid3d3LnNwaGVyb24ubmV0d29yayJ9.YGZxsjjctjxxsN2WMUiB4xffJVUeacCErkbPFk0QFNc';
const client = new SpheronClient({ token }); 

let currentlyUploaded = 0; 
// Default to grabbing a wallet connection in a browser

 const db2 = new Database();

// This is the table's `prefix`--a custom table value prefixed as part of the table's name

const db = new Polybase({
  defaultNamespace: "pk/0xa08044cc7ba5415c39c7f20ad88b04a82f7cf8e850d968cacf2bcddd46615a75afc495b1e69786fb67c542a70b91946e0ac02a61fdd7a17bb2fd407676b28afa/ArtifactsDAO",
});
// If you want to edit the contract code in the future,
// you must sign the request when calling applySchema for the first time


const MintFile = () => {
  const navigate = useRouter();
  const [errorMessage, setErrorMessage] = useState(null);
  const [uploadedFile, setUploadedFile] = useState();
  const [uploadedFile2, setUploadedFile2] = useState();
  const [imageView, setImageView] = useState();
  const [metaDataURL, setMetaDataURl] = useState();
  const [txURL, setTxURL] = useState();
  const [txStatus, setTxStatus] = useState();
  const [formInput, updateFormInput] = useState({ name: "",  total: "", author: "", twitter: "",  country: "",  type: "",  category: "",  description: "",  affiliate: "" });

  
  
  
  
  
  const handleFileUpload = (event) => {
    console.log("Paper for upload selected...");
    setUploadedFile(event.target.files[0]);
    setTxStatus("");
    setImageView("");
    setMetaDataURl("");
    setTxURL("");
  };
  const PolybaseDB = async (metaData) => { // use this info for transak package
    console.log("Inside Polybase");
    console.log("db is ", db);

    const tname = metaData.data.name;
    console.log("name field is", tname);
    const tcontact = metaData.data.properties.contact;
    console.log("twitter field is", tcontact);
    await db.collection("publication").create([metaData.url, tname, tcontact]);
  };
  const handleFileUpload2 = (event) => {
    console.log("Artifact for upload selected...");
    setUploadedFile2(event.target.files[0]);
  };

  const uploadPaper = async (inputFile, inputFile2) => {
    const { name, total, author, twitter, country, type, category, description, affiliate  } = formInput;
    if (!name || !total || !author || !twitter || !country || !type || !category || !description || !affiliate || !inputFile || !inputFile2) return;
     const nftStorage = new NFTStorage({ token: APIKEY, });
    try {
      console.log("Trying to upload file to ipfs");
      setTxStatus("Uploading Article to IPFS");
      console.log("close to metadata");
      const metaData = await nftStorage.store({
        name: name,
        description: description,
        image: inputFile,
        properties: {
          author, // article Author
          total,
          twitter,
          country,
          type,
          image2: inputFile2,
          affiliate,
          category // category
        },
      });
      console.log("metadata is: ", { metaData });
      setMetaDataURl(metaData.url);
    
// uploading to spheron SDK
      const { uploadId, bucketId, protocolLink, dynamicLinks } = await client.upload(
        inputFile,
        {
          protocol: ProtocolEnum.IPFS,
          name,
          onUploadInitiated: (uploadId) => {
             console.log(`Upload with id ${uploadId} started...`);
          },
          onChunkUploaded: (uploadedSize, totalSize) => {
            currentlyUploaded += uploadedSize;
             console.log(`Uploaded ${currentlyUploaded} of ${totalSize} Bytes.`);
          },
        }
      );



   // sending record to Polybase
      console.log("Inside Polybase");
      console.log("db is ", db);
      const web3Modal = new Web3Modal();
      const connection = await web3Modal.connect();
      const provider = new ethers.providers.Web3Provider(connection);  
      const signer = provider.getSigner();
   
      const id = metaData.url;
      console.log("id field is", id);
      const publicKey = signer;
      console.log("publicKey field is", publicKey);
      const paperTitle = metaData.data.name; 
      console.log("paperTitle field is", paperTitle);
      const leadAuthor = metaData.data.properties.total; 
      console.log("tleadAuthorr field is", leadAuthor);
      const correspondingAuthor = metaData.data.properties.author; 
      console.log("correspondingAuthor field is", correspondingAuthor);
      const twitter1 = metaData.data.properties.twitter; 
      console.log("twitter field is",twitter);
      const country1 = metaData.data.properties.country; 
      console.log("country field is", country);
      const researchArea = metaData.data.properties.category; 
      console.log("researchArea field is", researchArea);
      const paperType = metaData.data.properties.type; 
      console.log("paperType field is", paperType);
      const abstract = metaData.data.description; 
      console.log("abstract field is", abstract);
      const affiliation = metaData.data.properties.affiliate; 
      console.log("taffiliation field is", affiliation);
/**
      const prefix = "ao_table";

      const { meta: create } = await db2
      .prepare(`CREATE TABLE ${prefix} (id integer primary key, pname text, total text, pauthor text, twitter text, country text, ptype text, pcategory text, pdescription text, paffiliate text);`)
      .run();
      // The table's `name` is in the format `{prefix}_{chainId}_{tableId}`
        const { tname } = create.txn; // e.g., my_sdk_table_80001_311

      // Insert a row into the table
      const { meta: insert } = await db2
      .prepare(`INSERT INTO ${tname} (name, total, author, twitter, country, type, category, description, affiliate) VALUES (paperTitle, leadAuthor, correspondingAuthor, twitter1, country1, researchArea, paperType, abstract, affiliation );`)
      .bind(0, "Bobby Tables")
      .run();

      // Wait for transaction finality
      await insert.txn.wait();
 */
   //   await db.collection("publication").create([id,publicKey,paperTitle, leadAuthor, correspondingAuthor, twitter, country, researchArea, paperType, abstract, affiliation]);
      
      console.log("metadata down: ", { metaData });
  return metaData;
      
    } catch (error) {
      setErrorMessage("Could store file to NFT.Storage - Aborted file upload.");
      console.log("Error Uploading Content", error);
    }
  };

  const sendTxToBlockchain = async (metadata) => {
    try {
      setTxStatus("Adding transaction to Filecoin Hyperspace.");
      const web3Modal = new Web3Modal();
      const connection = await web3Modal.connect();
      const provider = new ethers.providers.Web3Provider(connection);
      const connectedContract = new ethers.Contract(ArtifactsAddress, fileNFT.abi, provider.getSigner());
      console.log("Connected to contract", ArtifactsAddress);
      console.log("IPFS blockchain uri is ", metadata.url);

      const mintNFTTx = await connectedContract.createToken(metadata.url);
      console.log("File successfully created and added to Blockchain");
      await mintNFTTx.wait();
      return mintNFTTx;
    } catch (error) {
      setErrorMessage("Failed to send tx to Hyperspace.");
      console.log(error);
    }
  };

  const previewNFT = (metaData, mintNFTTx) => {
    console.log("getIPFSGatewayURL2 two is ...");
    const imgViewString = getIPFSGatewayURL(metaData.data.image.pathname);
    console.log("image ipfs path is", imgViewString);
    setImageView(imgViewString);
   setMetaDataURl(getIPFSGatewayURL(metaData.url));
    setTxURL(`https://hyperspace.filfox.info/en/tx/${mintNFTTx.hash}`);
    setTxStatus("Article submission was successfully!");
    console.log("Article submission completed");
  };

  const mintNFTFile = async (e, uploadedFile, uploadedFile2) => {
    e.preventDefault();
    // 1. upload File content via NFT.storage
    const metaData = await uploadPaper(uploadedFile, uploadedFile2);

    // 2. Mint a NFT token on BTTC Chain
    const mintNFTTx = await sendTxToBlockchain(metaData);

    // 3. preview the minted nft
    previewNFT(metaData, mintNFTTx);

    //4. Mint Reward
    // mintReward();

    //5. navigate("/explore");
   navigate.push('/dashboard');
  };

  const getIPFSGatewayURL = (ipfsURL) => {
    const urlArray = ipfsURL.split("/");
    console.log("urlArray = ", urlArray);
    const ipfsGateWayURL = `https://${urlArray[2]}.ipfs.nftstorage.link/${urlArray[3]}`;
    console.log("ipfsGateWayURL = ", ipfsGateWayURL)
    return ipfsGateWayURL;
  };

  return (
    <Box as="section"  sx={styles.section}>
      <div className="bg-pink-100 text-xl text-center text-black font-bold pt-10 pb-1">
        <h1> Submit your Scientific Paper</h1>
      </div>
      <div className="flex justify-center bg-pink-100">
        <div className="w-1/2 flex flex-col pb-12 ">
        <input
            placeholder="Research / Paper Title"
            className="mt-3 border rounded p-2 text-xl"
            onChange={(e) => updateFormInput({ ...formInput, name: e.target.value })}
          />
          <select
            className="bg-white mt-3 border rounded p-2 text-xl"
            placeholder="Choose total authors"
            // value={this.state.value}
            onChange={(e) => updateFormInput({ ...formInput, total: e.target.value })}
          ><option value="0">Select Total Numbers of Author(s)</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7+</option>
          </select>

          <input
            placeholder="Corresponding / First Author's Name"
            className="mt-3 border rounded p-2 text-xl "
            onChange={(e) => updateFormInput({ ...formInput, author: e.target.value })}
          />
          <input
            placeholder="Author's Twitter Handle"
            className="mt-3 border rounded p-2 text-xl"
            onChange={(e) => updateFormInput({ ...formInput, twitter: e.target.value })}
          />

          <select
            className="bg-white mt-3 border rounded p-2 text-xl"
            placeholder="Choose research area"
            onChange={(e) => updateFormInput({ ...formInput, country: e.target.value })}
          ><option >Select Country</option>
            <option value="AF">Afghanistan</option>
    <option value="AX">Aland Islands</option>
    <option value="AL">Albania</option>
    <option value="DZ">Algeria</option>
    <option value="AS">American Samoa</option>
    <option value="AD">Andorra</option>
    <option value="AO">Angola</option>
    <option value="AI">Anguilla</option>
    <option value="AQ">Antarctica</option>
    <option value="AG">Antigua and Barbuda</option>
    <option value="AR">Argentina</option>
    <option value="AM">Armenia</option>
    <option value="AW">Aruba</option>
    <option value="AU">Australia</option>
    <option value="AT">Austria</option>
    <option value="AZ">Azerbaijan</option>
    <option value="BS">Bahamas</option>
    <option value="BH">Bahrain</option>
    <option value="BD">Bangladesh</option>
    <option value="BB">Barbados</option>
    <option value="BY">Belarus</option>
    <option value="BE">Belgium</option>
    <option value="BZ">Belize</option>
    <option value="BJ">Benin</option>
    <option value="BM">Bermuda</option>
    <option value="BT">Bhutan</option>
    <option value="BO">Bolivia</option>
    <option value="BQ">Bonaire, Sint Eustatius and Saba</option>
    <option value="BA">Bosnia and Herzegovina</option>
    <option value="BW">Botswana</option>
    <option value="BV">Bouvet Island</option>
    <option value="BR">Brazil</option>
    <option value="IO">British Indian Ocean Territory</option>
    <option value="BN">Brunei Darussalam</option>
    <option value="BG">Bulgaria</option>
    <option value="BF">Burkina Faso</option>
    <option value="BI">Burundi</option>
    <option value="KH">Cambodia</option>
    <option value="CM">Cameroon</option>
    <option value="CA">Canada</option>
    <option value="CV">Cape Verde</option>
    <option value="KY">Cayman Islands</option>
    <option value="CF">Central African Republic</option>
    <option value="TD">Chad</option>
    <option value="CL">Chile</option>
    <option value="CN">China</option>
    <option value="CX">Christmas Island</option>
    <option value="CC">Cocos (Keeling) Islands</option>
    <option value="CO">Colombia</option>
    <option value="KM">Comoros</option>
    <option value="CG">Congo</option>
    <option value="CD">Congo, Democratic Republic of the Congo</option>
    <option value="CK">Cook Islands</option>
    <option value="CR">Costa Rica</option>
    <option value="CI">Cote D'Ivoire</option>
    <option value="HR">Croatia</option>
    <option value="CU">Cuba</option>
    <option value="CW">Curacao</option>
    <option value="CY">Cyprus</option>
    <option value="CZ">Czech Republic</option>
    <option value="DK">Denmark</option>
    <option value="DJ">Djibouti</option>
    <option value="DM">Dominica</option>
    <option value="DO">Dominican Republic</option>
    <option value="EC">Ecuador</option>
    <option value="EG">Egypt</option>
    <option value="SV">El Salvador</option>
    <option value="GQ">Equatorial Guinea</option>
    <option value="ER">Eritrea</option>
    <option value="EE">Estonia</option>
    <option value="ET">Ethiopia</option>
    <option value="FK">Falkland Islands (Malvinas)</option>
    <option value="FO">Faroe Islands</option>
    <option value="FJ">Fiji</option>
    <option value="FI">Finland</option>
    <option value="FR">France</option>
    <option value="GF">French Guiana</option>
    <option value="PF">French Polynesia</option>
    <option value="TF">French Southern Territories</option>
    <option value="GA">Gabon</option>
    <option value="GM">Gambia</option>
    <option value="GE">Georgia</option>
    <option value="DE">Germany</option>
    <option value="GH">Ghana</option>
    <option value="GI">Gibraltar</option>
    <option value="GR">Greece</option>
    <option value="GL">Greenland</option>
    <option value="GD">Grenada</option>
    <option value="GP">Guadeloupe</option>
    <option value="GU">Guam</option>
    <option value="GT">Guatemala</option>
    <option value="GG">Guernsey</option>
    <option value="GN">Guinea</option>
    <option value="GW">Guinea-Bissau</option>
    <option value="GY">Guyana</option>
    <option value="HT">Haiti</option>
    <option value="HM">Heard Island and Mcdonald Islands</option>
    <option value="VA">Holy See (Vatican City State)</option>
    <option value="HN">Honduras</option>
    <option value="HK">Hong Kong</option>
    <option value="HU">Hungary</option>
    <option value="IS">Iceland</option>
    <option value="IN">India</option>
    <option value="ID">Indonesia</option>
    <option value="IR">Iran, Islamic Republic of</option>
    <option value="IQ">Iraq</option>
    <option value="IE">Ireland</option>
    <option value="IM">Isle of Man</option>
    <option value="IL">Israel</option>
    <option value="IT">Italy</option>
    <option value="JM">Jamaica</option>
    <option value="JP">Japan</option>
    <option value="JE">Jersey</option>
    <option value="JO">Jordan</option>
    <option value="KZ">Kazakhstan</option>
    <option value="KE">Kenya</option>
    <option value="KI">Kiribati</option>
    <option value="KP">Korea, Democratic People's Republic of</option>
    <option value="KR">Korea, Republic of</option>
    <option value="XK">Kosovo</option>
    <option value="KW">Kuwait</option>
    <option value="KG">Kyrgyzstan</option>
    <option value="LA">Lao People's Democratic Republic</option>
    <option value="LV">Latvia</option>
    <option value="LB">Lebanon</option>
    <option value="LS">Lesotho</option>
    <option value="LR">Liberia</option>
    <option value="LY">Libyan Arab Jamahiriya</option>
    <option value="LI">Liechtenstein</option>
    <option value="LT">Lithuania</option>
    <option value="LU">Luxembourg</option>
    <option value="MO">Macao</option>
    <option value="MK">Macedonia, the Former Yugoslav Republic of</option>
    <option value="MG">Madagascar</option>
    <option value="MW">Malawi</option>
    <option value="MY">Malaysia</option>
    <option value="MV">Maldives</option>
    <option value="ML">Mali</option>
    <option value="MT">Malta</option>
    <option value="MH">Marshall Islands</option>
    <option value="MQ">Martinique</option>
    <option value="MR">Mauritania</option>
    <option value="MU">Mauritius</option>
    <option value="YT">Mayotte</option>
    <option value="MX">Mexico</option>
    <option value="FM">Micronesia, Federated States of</option>
    <option value="MD">Moldova, Republic of</option>
    <option value="MC">Monaco</option>
    <option value="MN">Mongolia</option>
    <option value="ME">Montenegro</option>
    <option value="MS">Montserrat</option>
    <option value="MA">Morocco</option>
    <option value="MZ">Mozambique</option>
    <option value="MM">Myanmar</option>
    <option value="NA">Namibia</option>
    <option value="NR">Nauru</option>
    <option value="NP">Nepal</option>
    <option value="NL">Netherlands</option>
    <option value="AN">Netherlands Antilles</option>
    <option value="NC">New Caledonia</option>
    <option value="NZ">New Zealand</option>
    <option value="NI">Nicaragua</option>
    <option value="NE">Niger</option>
    <option value="NG">Nigeria</option>
    <option value="NU">Niue</option>
    <option value="NF">Norfolk Island</option>
    <option value="MP">Northern Mariana Islands</option>
    <option value="NO">Norway</option>
    <option value="OM">Oman</option>
    <option value="PK">Pakistan</option>
    <option value="PW">Palau</option>
    <option value="PS">Palestinian Territory, Occupied</option>
    <option value="PA">Panama</option>
    <option value="PG">Papua New Guinea</option>
    <option value="PY">Paraguay</option>
    <option value="PE">Peru</option>
    <option value="PH">Philippines</option>
    <option value="PN">Pitcairn</option>
    <option value="PL">Poland</option>
    <option value="PT">Portugal</option>
    <option value="PR">Puerto Rico</option>
    <option value="QA">Qatar</option>
    <option value="RE">Reunion</option>
    <option value="RO">Romania</option>
    <option value="RU">Russian Federation</option>
    <option value="RW">Rwanda</option>
    <option value="BL">Saint Barthelemy</option>
    <option value="SH">Saint Helena</option>
    <option value="KN">Saint Kitts and Nevis</option>
    <option value="LC">Saint Lucia</option>
    <option value="MF">Saint Martin</option>
    <option value="PM">Saint Pierre and Miquelon</option>
    <option value="VC">Saint Vincent and the Grenadines</option>
    <option value="WS">Samoa</option>
    <option value="SM">San Marino</option>
    <option value="ST">Sao Tome and Principe</option>
    <option value="SA">Saudi Arabia</option>
    <option value="SN">Senegal</option>
    <option value="RS">Serbia</option>
    <option value="CS">Serbia and Montenegro</option>
    <option value="SC">Seychelles</option>
    <option value="SL">Sierra Leone</option>
    <option value="SG">Singapore</option>
    <option value="SX">Sint Maarten</option>
    <option value="SK">Slovakia</option>
    <option value="SI">Slovenia</option>
    <option value="SB">Solomon Islands</option>
    <option value="SO">Somalia</option>
    <option value="ZA">South Africa</option>
    <option value="GS">South Georgia and the South Sandwich Islands</option>
    <option value="SS">South Sudan</option>
    <option value="ES">Spain</option>
    <option value="LK">Sri Lanka</option>
    <option value="SD">Sudan</option>
    <option value="SR">Suriname</option>
    <option value="SJ">Svalbard and Jan Mayen</option>
    <option value="SZ">Swaziland</option>
    <option value="SE">Sweden</option>
    <option value="CH">Switzerland</option>
    <option value="SY">Syrian Arab Republic</option>
    <option value="TW">Taiwan, Province of China</option>
    <option value="TJ">Tajikistan</option>
    <option value="TZ">Tanzania, United Republic of</option>
    <option value="TH">Thailand</option>
    <option value="TL">Timor-Leste</option>
    <option value="TG">Togo</option>
    <option value="TK">Tokelau</option>
    <option value="TO">Tonga</option>
    <option value="TT">Trinidad and Tobago</option>
    <option value="TN">Tunisia</option>
    <option value="TR">Turkey</option>
    <option value="TM">Turkmenistan</option>
    <option value="TC">Turks and Caicos Islands</option>
    <option value="TV">Tuvalu</option>
    <option value="UG">Uganda</option>
    <option value="UA">Ukraine</option>
    <option value="AE">United Arab Emirates</option>
    <option value="GB">United Kingdom</option>
    <option value="US">United States</option>
    <option value="UM">United States Minor Outlying Islands</option>
    <option value="UY">Uruguay</option>
    <option value="UZ">Uzbekistan</option>
    <option value="VU">Vanuatu</option>
    <option value="VE">Venezuela</option>
    <option value="VN">Viet Nam</option>
    <option value="VG">Virgin Islands, British</option>
    <option value="VI">Virgin Islands, U.s.</option>
    <option value="WF">Wallis and Futuna</option>
    <option value="EH">Western Sahara</option>
    <option value="YE">Yemen</option>
    <option value="ZM">Zambia</option>
    <option value="ZW">Zimbabwe</option>

          </select>

                    <select
            className="bg-white mt-3 border rounded p-2 text-xl"
            placeholder="Choose research area"
            // value={this.state.value}
            onChange={(e) => updateFormInput({ ...formInput, category: e.target.value })}
          ><option value="0">Choose Research Area</option>
            <option value="Computer Science">Computer Science</option>
            <option value="Mathematics">Mathematics</option>
            <option value="Engineering">Engineering</option>
            <option value="Physics">Physics</option>
            <option value="BioInformatics">BioInformatics</option>
            <option value="Medicine">Medicine</option>
            <option value="Other Category">Other Category</option>
          </select>

          <select
            className="bg-white mt-3 border rounded p-2 text-xl"
            onChange={(e) => updateFormInput({ ...formInput, type: e.target.value })}
          ><option value="0">Select Scientific Paper Type</option>
            <option value="Research Article">Research Article</option>
            <option value="Review Paper">Review Paper</option>
            <option value="Case Study">Case Study</option>
            <option value="Thesis">Thesis</option>
            <option value="Others">Others</option>
          </select>

          <textarea
            placeholder="Abstract"
            rows="4"
            className="mt-3 border rounded p-2 text-xl"
            onChange={(e) => updateFormInput({ ...formInput, description: e.target.value })}
          />

          <input
            placeholder="Institution / Orgnaisation Affilliate"
            className="mt-3 border rounded p-2 text-xl"
            onChange={(e) => updateFormInput({ ...formInput, affiliate: e.target.value })}
          />

          <br />
          <div className="MintNFT text-black text-xl">
            <form>
              <h3>Upload your Scientific Paper (Pdf)</h3>
              <input type="file" onChange={handleFileUpload} className="text-black mt-2 border rounded  text-xl" />
              <br /><br />
              <h3>Upload your Zipped Scientific Artifact</h3>
              <input type="file" onChange={handleFileUpload2} className="text-black mt-2 border rounded  text-xl" />
            </form>
            <br /><br />
            {txStatus && <p className="text-blue">{txStatus}</p>}
            
            {metaDataURL && <p className="text-blue"><a href={metaDataURL} className="text-blue">Metadata on IPFS</a></p>}
            
            {txURL && <p><a href={txURL} className="text-blue">See the mint transaction</a></p>}
           
            {errorMessage}

            
            {imageView && (
            <iframe
              className="mb-10"
              title="File"
              src={imageView}
              alt="File preview"
              frameBorder="0"
              scrolling="auto"
              height="50%"
              width="100%"
            />
            )}

          </div>

          <button type="button" onClick={(e) => mintNFTFile(e, uploadedFile, uploadedFile2)} className="font-bold mt-20 bg-red-700 text-white text-2xl rounded p-4 shadow-lg">
            Submit Paper
          </button>
        </div>
      </div>
    </Box>

  );
};
export default MintFile;

const styles = {
  section: {
    backgroundColor: 'primary',
    pt: [17, null, null, 20, null],
    pb: [6, null, null, 12, 16],
  },
};
