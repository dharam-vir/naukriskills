import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { changePassword } from '../../features/AuthSlice';

const Changepassword = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const dispatch = useDispatch();
  const { loading, error, success } = useSelector((state) => state.auth);

  const handleSubmit = (e) => {
    e.preventDefault();

    if(newPassword !== confirmPassword){
      toast.error('Passwords do not match!');
      return;
    }else{
      dispatch(changePassword({currentPassword, newPassword}));
    }    
  }
  return (
    <Fragment>
      <div className="row">
        <div className="col-xl-12">
          <div id="test1" className="dashboard-box margin-top-0">
            <div className="headline">
              <h3>Change Password</h3>
            </div>
            <div className="content with-padding">
              <div className="row">
                <div className="col-xl-12 col-md-6 col-sm-6">
                  <div className="utf-submit-field">
                    <h5>Current Password</h5>
                    <input type="password"
                      className="utf-with-border"
                      title="Current Password"
                      data-tippy-placement="top"
                      placeholder="********"
                      value={currentPassword}
                      onChange={(e) => setCurrentPassword(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-xl-12 col-md-6 col-sm-6">
                  <div className="utf-submit-field">
                    <h5>New Password</h5>
                    <input type="password"
                      className="utf-with-border"
                      title="The password must be at least 8 characters"
                      data-tippy-placement="top"
                      placeholder="********"
                      value={newPassword}
                      onChange={(e)=>setNewPassword(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-xl-12 col-md-6 col-sm-6">
                  <div className="utf-submit-field">
                    <h5>Confirm New Password</h5>
                    <input type="password"
                      className="utf-with-border"
                      title="The password must be at least 8 characters"
                      data-tippy-placement="top"
                      placeholder="********"
                      value={confirmPassword}
                      onChange={(e)=>setConfirmPassword(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <Link onClick={handleSubmit} className="button ripple-effect big margin-top-10" disabled={loading}>
                {loading ? 'Changing Password...' : 'Change Password'}
              </Link>
            </div>
             {error && <p style={{ color: 'red' }}>{error}</p>}
             {success && <p style={{ color: 'green' }}>{success}</p>}
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Changepassword