import classNames from 'classnames/bind';
import styles from './AccountItems.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItems() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://png.pngtree.com/png-vector/20190704/ourlarge/pngtree-businessman-user-avatar-free-vector-png-image_1538405.jpg"
                alt="Van A"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Van A</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>nguyen van a</span>
            </div>
        </div>
    );
}

export default AccountItems;
