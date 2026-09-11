import { Link, } from "react-router-dom";
import { useTranslation } from "react-i18next";

function MenuLinks({toggleDrawer, cssClass}) {
  const { t, i18n } = useTranslation();

  const updateLanguage = (lng) => {
		i18n.changeLanguage(lng); // changes the language
		localStorage.setItem("language", lng); //salvestab keele valiku local storagesisse
	};

  return (
    <div className={cssClass} onClick={toggleDrawer(false)}>
        <Link to="/ostukorv">
            <button className="nupp">{t('menu.cart')}</button>
        </Link>

        <Link to="/osta-kinkekaart">
            <button className="nupp">{t('menu.gift_card')}</button>
        </Link>

        <Link to="/lisa-toode">
            <button className="nupp">{t('menu.add_product')}</button>
        </Link>

        <Link to="/seaded">
            <button className="nupp">{t('menu.settings')}</button>
        </Link>

        <Link to="/esindused">
            <button className="nupp">{t('menu.stores')}</button>
        </Link>

        <Link to="/kalkulaator">
            <button className="nupp">{t('menu.calculator')}</button>
        </Link>
        <Link to="/arrays">
            <button className="nupp">{t('menu.arrays')}</button>
        </Link>

        <Link to="/halda">
            <button className="nupp">{t('menu.manage')}</button>
        </Link>

        <Link to="/lisa">
            <button className="nupp">{t('menu.add')}</button>
        </Link>

        <Link to="/api">
            <button className="nupp">{t('menu.api')}</button>
        </Link>

        <button onClick={() => updateLanguage("et")}>ET</button>
        <button onClick={() => updateLanguage("en")}>EN</button>
    </div>
  )
}

export default MenuLinks