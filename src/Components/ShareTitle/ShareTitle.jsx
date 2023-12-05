

const ShareTitle = ({header,subHeader}) => {
    return (
        <div className="text-center mb-5">
            <p className="text-yellow-400 text-xl">{subHeader}</p>
            <h2 className="text-2xl font-bold text-yellow-300">{header}</h2>
        </div>
    );
};

export default ShareTitle;