import React from 'react';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ErrorIcon from '@material-ui/icons/Error';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
// import { makeStyles } from '@material-ui/core/styles';
// import green from '@material-ui/core/colors/green';
import PropTypes from 'prop-types';
import "./index.css"



const variantIcon = {
    success: CheckCircleIcon,
    danger: ErrorIcon,
}

// const handleClick = newState => () => {
//     setState({ open: true, ...newState });
// };

export default function ourSnackbar(props) {
    const { text, className, variant, onClose } = props;
    const Icon = variantIcon[variant];

    return (
        <div>
            <SnackbarContent
                className={`${className} bg-${variant} op85`}
                onClose={onClose}
                aria-describedby="message-id"
                message={
                    <span id="message-id">
                        <Icon /> {text}
                    </span>
                }
                action={[
                    <IconButton key="close" aria-label="Close" color="inherit" onClick={onClose}>
                        <CloseIcon />
                    </IconButton>,
                ]}
            />
        </div>
    )
}

ourSnackbar.propTypes = {
    className: PropTypes.string,
    text: PropTypes.string,
    variant: PropTypes.oneOf(['success', 'danger']).isRequired,
};