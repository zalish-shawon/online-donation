/* eslint-disable react/prop-types */

const SearchData = ({item}) => {
    const {picture, title, category, category_bg, card_bg, text_color,  } = item

    return (
        <div>
            <div style={{backgroundColor: `${card_bg}`}} className="card  shadow-xl cursor-pointer">
                <figure><img className='w-full' src={picture} alt="" /></figure>
                <div className="card-body">
                    
                        <div style={{backgroundColor: `${category_bg}`}} className="badge"><p style={{color: `${text_color}`}}>{category}</p></div>
                    
                    <p style={{color: `${text_color}`}} className='font-bold'>{title}</p>
                    
                </div>
            </div>
        </div>
    );
};

export default SearchData;