import companyLogo from '../assets/logo/companyLogo.jpg';

const Logo = () => {
  return (
    <div className="flex justify-center my-3 px-5 items-center">
      <a href='/' className="flex items-center flex pr-3 pl-1 font-normal text-lg">
        <img width="250px" src={companyLogo} alt='company logo' className="mr-2"/>
      </a>
    </div>
  );
};

export default Logo;