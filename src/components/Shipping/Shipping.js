import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';

const Shipping = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    const { user } = useAuth();
    return (
        <div className="login-form">
            <form style={{ marginTop: '50px' }} onSubmit={handleSubmit(onSubmit)}>

                <input className="login-input" defaultValue={user.displayName} {...register("name")} />
                <input className="login-input" defaultValue={user.email} {...register("email", { required: true })} />
                {errors.exampleRequired && <span>This field is required</span>}
                <input className="login-input" placeholder="Address" defaultValue="" {...register("address")} />
                <input className="login-input" placeholder="City" defaultValue="" {...register("city")} />
                <input className="login-input" placeholder="Phone number" defaultValue="" {...register("number")} />

                <input className="login-btn" type="submit" />
            </form>
        </div>
    );
};

export default Shipping;