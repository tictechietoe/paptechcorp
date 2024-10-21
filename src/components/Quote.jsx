const Quote = ({ icon, iconColor, message, textColor }) => {
  return (
    <div className="grid grid-cols-5 gap-2 responsive-gap responsive-padding">
      <div className={ `flex items-center justify-end mx-5 col-span-1 text-${iconColor}` }>
        <div className="flex ">{ icon }</div>
      </div>
      <div className={ `flex items-center col-span-4 font-medium text-sm md:text-base lg:text-xl text-${textColor}` }>
        { message }
      </div>
    </div>
  );
};

export default Quote;