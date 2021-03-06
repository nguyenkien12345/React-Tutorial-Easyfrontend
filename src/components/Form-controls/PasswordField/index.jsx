import { FormHelperText } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Controller } from 'react-hook-form';

PasswordField.propTypes = {
    name: PropTypes.string.isRequired,
    form: PropTypes.object.isRequired,
    label: PropTypes.string,
};

function PasswordField(props) {

    const {name,form,label} = props;

    const {formState} = form;

    const {errors} = formState;

    // const hasError = formState.touchedFields[name] && errors[name]; 

    const hasError = errors[name];

    const [showPassword, setShowPassword] = useState(false);

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    }

    return (
        <FormControl error={!!hasError} variant="outlined" fullWidth margin="normal">
          <InputLabel htmlFor={name}>{label}</InputLabel>
          <Controller
            name={name}                 
            control={form.control}
            render={({field}) => (
                <OutlinedInput
                    {...field}
                    id={name}
                    type={showPassword ? 'text' : 'password'}
                    label={label}
                    endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                        aria-label="toggle password visibility"
                        onClick={toggleShowPassword}
                        edge="end"
                        >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                    </InputAdornment>
                    }
                />
            )}
          />
          <FormHelperText>{errors[name]?.message}</FormHelperText>
        </FormControl>
    );
}

export default PasswordField;

// L?? thuy???t 

// B??t bu???c 100% ph???i c?? props form,name

// Ch??? hi???n th??? l???i khi ???? touched,click v?? c?? l???i t???n t???i trong errors

// Controller: t??? ?????ng binding v??o trong OutlinedInput c??c h??m, s??? ki???n nh?? l?? onChange,onBlur,value,name....

// formState.touchedFields[name] n?? s??? tr??? v??? gi?? tr??? true, false nh??ng && errors[name] n?? s??? tr??? v??? object m?? error ch??? nh???n v??? gi?? tr??? true ho???c false do ???? ta th??m c???p d???u !! ????? chuy???n hasError v??? ki???u boolean