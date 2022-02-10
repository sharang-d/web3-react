import dynamic from 'next/dynamic'


const MetaMaskCard = dynamic(() => import('../components/connectors/MetaMaskCard'), { ssr: false })

export default function Home() {
  return (
    <>
      <div style={{ display: 'flex', flexFlow: 'wrap', fontFamily: 'sans-serif' }}>
        <MetaMaskCard />
      </div>
    </>
  )
}
