

const FotterComponent = (props) => {
    const { icon, suhu, text1 } = props;

    return (
        <div className='flex flex-row items-center gap-2 '>

            {icon}

            <div className='leading-4  '>
                <h2 className='text-lg font-bold'>{suhu}</h2>
                <p className='font-semibold'> {text1}</p>
            </div>



        </div>
    );
}

export default FotterComponent;