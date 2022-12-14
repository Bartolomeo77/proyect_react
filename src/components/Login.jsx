import { Component } from "react";
import {Link,} from "react-router-dom"
import axios from 'axios';
import Cookies from 'universal-cookie';


const baseurl ="http://localhost:3004/usuarios";
const cookies = new Cookies();



class Login extends Component{

    state={
        form:{
            username:'',
            password:''
        }
    }

    handlendChange=async e=>{
        await this.setState({
            form:{
                ...this.state.form,
                [e.target.name]:e.target.value
            }
        });
        console.log(this.state.form);
    }

    iniciarsesion=async()=>{
        await axios.get(baseurl, {params: {usuario:this.state.form.username, clave:this.state.form.password}})
        .then(response=>{
            return response.data;
        })
        .then(response=>{
            if(response.length>0){
                var respuesta=response[0];
                cookies.set('id',respuesta.id,{path:"/"})
                cookies.set('usuario',respuesta.usuario,{path:"/"})
                cookies.set('password',respuesta.password,{path:"/"})
                let data = respuesta.usuario
                alert('Bienvenido '+data);
                window.location.href="./Register";

            }else {
                alert('el usuario o la contraseña no son correctos')

            }
        })
        .catch(error=>{
            console.log(error);
        })
    }

    render() {
        return (
            <>
                <div id="layoutAuthentication">
                    <div id="layoutAuthentication_content">
                        <main>
                            <div className="">
                                <div className="row justify-content-center">
                                    <div className="col-lg-5">
                                        <div className="card shadow-lg border-0 rounded-lg mt-5">
                                            <div className="card-header"><h3 className="text-center font-weight-light my-4">Login</h3></div>
                                            <div className="card-body">
                                                <div>
                                                    <div className="form-floating mb-3">
                                                        <input className="form-control" 
                                                        id="inputText" 
                                                        type="text" 
                                                        placeholder="usuario"
                                                        name="username" 
                                                        onChange={this.handlendChange}
                                                        />
                                                        <label for="inputText">Usuario</label>
                                                    </div>
                                                    <div className="form-floating mb-3">
                                                        <input className="form-control"
                                                        id="inputPassword" 
                                                        type="password" 
                                                        placeholder="Password"
                                                        name="password"  
                                                        onChange={this.handlendChange}
                                                        />
                                                        <label for="inputPassword">Password</label>
                                                    </div>
                                                    <div className="form-check mb-3">
                                                        <input className="form-check-input" id="inputRememberPassword" type="checkbox" value="" />
                                                        <label className="form-check-label" for="inputRememberPassword">Remember Password</label>
                                                    </div>
                                                    <div className="d-flex align-items-center justify-content-between mt-4 mb-0">
                                                        <Link to="/forgotPassword" className="small" href="password.html">Forgot Password?</Link>
                                                        <input type="submit" className="btn btn-primary" value="Login"/>
                                                    </div>
                                                    <button className="btn btn-primary" onClick={()=> this.iniciarsesion()} >Prueba</button>
                                                </div>
                                            </div>
                                            <div className="card-footer text-center py-3">
                                                <div className="small"><a href="register.html">Need an account? Sign up!</a></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </main>
                    </div>
           
                </div>
            </>
    )
      }

}

export default Login;