// import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PoperWrapper } from '~/components/Poper';
import AccountPreview from './AccountPreview';
import PropTypes from 'prop-types';
import Image from '~/components/Image';
const cx = classNames.bind(styles);
function AccountItem({ data }) {
    const renderPreview = (props) => {
        return (
            <div tabIndex="-1" {...props}>
                <PoperWrapper>
                    <div className={cx('preview')}>
                        <AccountPreview data={data} />
                    </div>
                </PoperWrapper>
            </div>
        );
    };
    return (
        <>
            <Tippy interactive offset={[-20, 0]} delay={[800, 0]} placement="bottom" render={renderPreview}>
                <div className={cx('account-item')}>
                    <Image className={cx('avatar')} src={data.avatar} alt={data.first_name} />
                    <div className={cx('item-info')}>
                        <p className={cx('nickname')}>
                            <strong>{data.nickname}</strong>
                            {data.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
                        </p>
                        <p className={cx('name')}>{`${data.first_name} ${data.last_name}`}</p>
                    </div>
                </div>
            </Tippy>
        </>
    );
}

AccountItem.propTypes = { data: PropTypes.object.isRequired };
export default AccountItem;
