import S from "./Cards.module.css";
export function Cards({text, children}) {
    return(
        <>
            <div className={S.card}>
                    {children && <div className={S.cardImg}>
                        {children}
                    </div>}


                <div className={S.cardBody}>
                    <h5 className={S.cardTitle}>{text.title}</h5>
                    <p className={S.cardText}>{text.text}</p>
                    <div href="#" class={S.btn}>Go somewhere</div>
                </div>
            </div>



        </>
    )
}


// <img src="https://i.pinimg.com/736x/57/08/6a/57086a501a50e7e45d8fe05ea6ec3aa7.jpg" className={S.cardImg} alt="test"/>