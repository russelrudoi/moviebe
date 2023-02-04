import Promo from '../promo/Promo';
import InTheaters from '../inTheaters/InTheaters';
import ComingSoon from '../comingSoon/ComingSoon';
import Movies from '../movies/Movies';
import Series from '../series/Series';

const MainPage = () => {
    return (
        <>
            <Promo />
            <InTheaters />
            <ComingSoon />
            <Movies />
            <Series />
        </>
    )
}

export default MainPage