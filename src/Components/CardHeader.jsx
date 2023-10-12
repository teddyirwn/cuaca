
import { FiSearch } from 'react-icons/fi'

const CardHeader = (props) => {
    const { onsubmit, value } = props;
    return (
        <div  >
            <form className='flex gap-2 justify-center' onSubmit={onsubmit}>
                <input type="text" name='submit'
                    placeholder='Input Location'
                    className="rounded-lg bg-sky-50 outline-none p-2 text-sm focus:bg-sky-100 w-3/4"
                    onChange={value}
                />
                <button id='submit' className='bg-sky-50 p-3 rounded-full'>
                    <FiSearch />
                </button>
            </form>
        </div>
    );
}

export default CardHeader;