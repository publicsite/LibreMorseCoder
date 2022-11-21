function get_cookie ( cookie_name )
{
  var results = localStorage.getItem(cookie_name);

  if ( results )
    return results;
  else
    return null;
}

function set_cookie ( name, value, path, exp_y, exp_m, exp_d, domain, secure )
{
	localStorage.setItem(name, value);
}