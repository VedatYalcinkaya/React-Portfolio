import { useSelector, useDispatch } from "react-redux";
import {setLanguage} from '../store/slices/languageSlice'

function LanguageSwitcher() {

    const dispatch = useDispatch();
    const language = useSelector((state) => state.language.language);

    const handleLanguageChange = (lang) => {
        dispatch(setLanguage(lang));
      };

    return (
        <div>
            <button className="bg-third mr-1 text-white px-1 py-1 text-sm font-semibold rounded-md sm:px-3" onClick={() => handleLanguageChange('en')}>En</button>
            <button className="bg-third text-white px-1 py-1 text-sm font-semibold rounded-md sm:px-3" onClick={() => handleLanguageChange('tr')}>Tr</button>
        </div>
    );
};

export default LanguageSwitcher;