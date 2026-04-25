const MainPage = () => {
  return (
    <div className="w-full flex justify-center">
      <picture className="w-full  rounded-lg overflow-hidden">
       
        <source
          media="(min-width: 768px)"
          srcSet="accredian-edge-usp-v3.svg"
        />
      
        <img
          src="accredian-edge-usp-mobile.svg"
          alt="The Accredian Edge Solutions"
          className="w-full h-auto object-contain"
        />
      </picture>
    </div>
  );
};

export default MainPage;
