

const PARTNERS = [
  { name: "Reliance", src: "rel.png" },
  { name: "HCL", src: "hcl.png" },
  { name: "IBM", src: "ibm.png" },
  { name: "CRIF", src: "crif.png" },
  { name: "ADP", src: "adp.svg" },
  { name: "Bayer", src: "bayer.svg" },
];

export const DesktopPartnerLogos = () => {
  return (
    <ul className="hidden md:grid grid-cols-3 lg:grid-cols-6 gap-x-8 gap-y-6 list-none p-0 items-center justify-items-center">
      {PARTNERS.map((partner) => (
        <li
          key={partner.name}
          className="flex items-center justify-center w-full p-4 md:p-0">
          <img
            src={`/${partner.src}`}
            alt={`${partner.name} logo`}
            className=" w-20 max-w-full object-contain   "
          />
        </li>
      ))}
    </ul>
  );
};
