import SocialIcons from "./SocialIcons"

const MobileHero: React.FC = () => {
  return (
    <div className="flex flex-col space-y-8 background-color[#004FCE] px-4 py-8 md:hidden">

      <div className="flex flex-col space-y-6 2xl:text-3xl text-xl text-center text-white  leading-8 tracking-tighter">
        <h1 className="text-3xl ">What is CHAD?</h1>

        <span className="">
          Chad is a yield farming token on Fantom Opera created to help provide liquidity to other meme tokens, a launch pad, and support farming pools for new projects.
        </span>
      </div>

      <img className="h-24" src="/images/ChadLogoLight.svg" alt="Chad logo light" />

      <div className="flex flex-col space-y-6 text-2xl leading-6 tracking-tighter text-white ">
        <h1 className="text-3xl text-center">TOKENOMICS</h1>
        <span>
          55% pre-sale <br /> 30% liquidity <br /> 10% marketing & dev fund <br /> 5% airdrop
        </span>
        <span className="pr-8">
          .69 Chad is minted each block, the farms have a deposit fee which is used to buyback and burn Chad
        </span>
      </div>
      <SocialIcons />
    </div>
  )
}

export default MobileHero
