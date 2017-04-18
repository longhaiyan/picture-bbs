import reqway from './request'

const LATENCY = 16

export function req (url = '', data = {}, success = null, error = null) {
	/* let op=Object.assign({
		url:"",
		data:{}
	},cfg);

	if(payload){
		op.data = Object.assign({

		},payload);
	} */

	return reqway({
		url,
		data,
		success: function(rsp) {
		  console.log('rsp',rsp)
			if (rsp.success) {
				// rsp.result._rspQuery = rsp._query;
        success && success(rsp.vars)
      } else {
        console.warn('error: api.req')
        error && error(rsp)
      }
    }
  })
}

export function post (url = '', data  = {}, success = null, error = null) {
  return reqway({
    url,
    data,
    method: 'post',
    success: function (rsp) {
      if (rsp.success) {
        success && success(rsp.vars)
      } else {
        console.warn('error: api.post')
        error && error(rsp)
      }
    }
  })
}

