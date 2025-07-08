

const BreadCrumbs = () => {
  return (
    <div className="bread-crumb-main">
        <div className="bread-container">
            <div style={{position:"relative",textAlign:"center"}} className="bread-header">
              <nav className="bread-content-container">
                <ol className="bread-content-ol">
                    <li ><a className="bread-list-item" href="#">Home</a></li>
                    <li className="bread-list"> <span className="bread-list-item">Daily Deals</span></li>
                </ol>
              </nav>
            </div>
        </div>
    </div>
  )
}

export default BreadCrumbs