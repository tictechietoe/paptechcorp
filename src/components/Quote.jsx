const Quote = ({ icon, iconColor, message }) => {
  return (
    <div className="flex items-center justify-center p-10">
      <div className={ `text-${iconColor} mx-10` }>
        { icon }
      </div>
      <div className="font-medium text-xl text-custom-pastel-blue">
        { `- "${message}."` }
      </div>
    </div>
  );
};

export default Quote;