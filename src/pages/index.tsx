import type { NextPage } from 'next'
import { ChangeEvent, useEffect, useState } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import Lottie from 'react-lottie';

import styles from '../styles/Home.module.css'

import LogoSvg from '../assets/image/phone_call.svg';
import NotFoundLottie from '../assets/lotties/not-found.json';
import LoadingLottie from '../assets/lotties/loading.json';


import Card from '../components/card';
import { RamalType } from '../types/ramal';
import { RamalApi } from '../services/api';

const Home: NextPage = () => {

  
  const [ramais, setRamais] = useState<RamalType[]>([]); 
  const [isbusy, setIsbusy] = useState(false);
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('');


  useEffect(() => { 
    const fetchData = async () => { 
      setLoading(true);
      const oRamalApi = new RamalApi();
      try {        
        let _ramais = await oRamalApi.getAllRamais();
        setRamais(_ramais);
      }
      finally {
        setLoading(false);
      }
    } 
    fetchData() 
      .catch(console.error);;
  }, []);

  async function handleSearch(e: ChangeEvent<HTMLInputElement>) {
    let filterInput = e.target.value;
    console.log(filterInput);

    setSearch(filterInput)

    if (!isbusy) {

      let oRamalApi = new RamalApi();
      let _ramais = ramais;

      setIsbusy(true);

      if (filterInput.length > 0) {
        _ramais = await oRamalApi.getRamaisFilter(filterInput);
      }
      else {
        _ramais = await oRamalApi.getAllRamais();
      }
      setIsbusy(false);
      setRamais(_ramais);
    }

  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Ramais App</title>
        <meta name="description" content="Ramais App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.logoContainer}>
        <Image src={LogoSvg} alt="Logo" height={200} />  
      </div>

      <div className={styles.inputSearch}>
        <input type={"text"} value={search} placeholder="Pesquisar..." id="filter" onChange={(e) => { handleSearch(e) }} />
      </div>

      <div className={styles.grid}>
        {
          (ramais.length > 0) ?
            ramais.map((item: RamalType, index) => (
              <Card key={index} number={item.number} name={item.name} local={item.local} />
            ))
            :
            <div>
              <Lottie options={{
                loop: true,
                autoplay: true,
                animationData: loading ? LoadingLottie : NotFoundLottie
              }}
                height={350}
                width={350}
              />
            </div>
        } 
      </div>

    </div>
  )
}

export default Home
