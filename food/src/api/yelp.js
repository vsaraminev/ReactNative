import axios from 'axios';

export default axios.create({
   baseURL: 'https://api.yelp.com/v3/businesses',
   headers: {
      Authorization: 'Bearer ITOtAPe2zdVWkqqo-FD9DHZwTq3tBcSNgPVpnafxghWLYbgnVaT2XSJCiKNVwm4Qodf1Oec0o7SKNQd5WKy26BrHbp8E6HhMEcl-RBaB9eJljqmDnO5ZpTdgZbhTXXYx'
   }
});