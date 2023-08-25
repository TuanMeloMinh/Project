    import '../functionality/addFuntion.css'
    const AddFuntion = ( ) => {
        const addProductBtn = ( ) => {
            console.log ('btnPro')
        }
        return(
            
                <div className="wrapper">
                    <form className="form-signin">       
                        <h2 className="form-signin-heading">Thêm Sản Phẩm </h2>
                        <input type="text" className="form-control" name="username" placeholder="Tên Sản Phẩm" required="" autofocus="" />
                        <input type="password" className="form-control" name="password" placeholder="Giá Bán" required=""/>     <br /> 
                        <button className="btn btn-lg btn-primary btn-block" type="submit" onClick={addProductBtn} >Add</button>   
                    </form>
                </div>
        )
    }
    export default AddFuntion
