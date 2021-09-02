

<div className='container-fluid'>
        <div className='d-flex justify-content-center bg-secondary'>
          <h1 className='text-white'>Surfinch</h1>
        </div>
        <div >
          <h1>Login</h1>
          {error && <div className="alert alert-danger" role="alert">
            Failed to login: {error}
          </div>}
          <form onSubmit={e => handleForm(e)}>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="E-mail Address"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
            <hr />
            <button disabled={loading} type="submit">Login</button>
            <div>
              <Link to="/SignUp">
                <button type="button">
                  New User?
                </button>
              </Link>
            </div>
            <span>{error}</span>
          </form>
        </div>
        {/* <div className='d-flex justify-content-center'> */}
        {/* <img src={Logo} width='20%' height='20%' alt='finch' /> */}
        {/* </div> */}
      </div>




<span class="bubble">
<a title="GitHub" href="https://github.com/{username}" target="_blank " rel="noopener noreferrer">
  <div>
    <i class="icon fab fa-github fa-2x"></i>
  </div>
  <div>
    <span>Github</span>
  </div>
</a>
</span>

