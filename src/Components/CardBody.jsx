const CardBody = (props) => {

    const { suhu, name } = props;
    return (
        <div className="flex flex-col items-center">
            <img src="images/sun.png" alt="" className="w-56 sm:w-72" />
            <div>
                <h1 className="text-3xl font-bold">{suhu}</h1>
                <p className="font-semibold">{name}</p>
            </div>
        </div>
    );
}


export default CardBody;