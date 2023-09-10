import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';

import styles from './Header.module.scss';
import images from '~/assets/images';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItems from '~/components/AccountItems';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function Header() {
    const [searchReuslt, setSearchResult] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([1, 2]);
        }, 0);
    }, []);

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                {/** Logo */}
                <div className={cx('logo')}>
                    <img src={images.logo} alt="Tiktok"></img>
                </div>
                {/** Btn Search */}
                <div>
                    <Tippy
                        interactive
                        visible={searchReuslt.length > 0}
                        render={(attrs) => (
                            <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                                <PopperWrapper>
                                    <h4 className={cx('search-title')}>Accounts</h4>
                                    <AccountItems />
                                    <AccountItems />
                                    <AccountItems />
                                </PopperWrapper>
                            </div>
                        )}
                    >
                        {/** Search */}
                        <div className={cx('search')}>
                            <input placeholder="Search" spellCheck={false} />
                            {/** Btn Clear */}
                            <button className={cx('clear')}>
                                <FontAwesomeIcon icon={faCircleXmark} />
                            </button>
                            <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
                            {/** Loading */}

                            <button className={cx('search-btn')}>
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </button>
                        </div>
                        {/** Action */}
                    </Tippy>
                </div>
                <div className={cx('action')}>
                    <Button text>Upload</Button>
                    <Button primary>Log in</Button>
                </div>
            </div>
        </header>
    );
}

export default Header;
