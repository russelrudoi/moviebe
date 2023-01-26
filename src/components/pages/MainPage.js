import Promo from '../promo/Promo';
import InTheatersList from '../inTheatersList/InTheatersList';
import ComingSoon from '../comingSoon/ComingSoon';
import Movies from '../movies/Movies';
import Series from '../series/Series';

const MainPage = () => {
    return (
        <>
            <Promo />
            <InTheatersList />
            <ComingSoon />
            <Movies />
            <Series />
        </>
    )
}

export default MainPage