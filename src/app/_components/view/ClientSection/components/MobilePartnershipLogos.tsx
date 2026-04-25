

const LOGO_ASSETS = [
  "rel.png",
  "hcl.png",
  "ibm.png",
  "crif.png",
  "adp.svg",
  "bayer.svg"
];




export const MobilePartnerLogos = () => {
  return (
    <div className="relative w-full overflow-hidden py-8 md:hidden">
      {}
      <div className="flex animate-marquee whitespace-nowrap w-max gap-8 px-4">
        {}
        {[...LOGO_ASSETS, ...LOGO_ASSETS].map((logo, index) => (
          <div 
            key={`${logo}-${index}`} 
            className="flex items-center justify-center min-w-[80px]"
          >
            <img
              src={`/${logo}`}
              alt="Client Partner Logo"
              className="h-14 w-auto object-contain  hover:opacity-100 transition-all"
            />
          </div>
        ))}
      </div>
    </div>
  );
};