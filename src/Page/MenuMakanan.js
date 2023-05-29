import React,{Component} from "react";
import ListMakanan from "../ListData/ListMakanan";

class MenuMakanan extends Component{
    constructor (props){
        super(props);
        this.state={
            pesan:0
        };
        this.rubahPesanan = this.rubahPesanan.bind(this);
        this.pesanan = this.pesanan.bind(this);
    }
    rubahPesanan(){
        this.setState((state, props)=>{
            return{pesan: state.pesanan
            };
        });
    }
    pesanan(e){
        console.log(e.target.value);
    }
    render(){
        return(
            <div>
                <h3>Daftar Makanan Yang Kami Sediakan : </h3>
                <table>
                    <tbody>
                        <tr>
                            <td> 
                                <ListMakanan listgambar ="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/nasipadang.jpg"/>
                                <button onClick={this.rubahPesanan}>Pesan Sekarang</button>
                            </td>
                            <td> 
                                <ListMakanan listgambar ="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sate.png"/>
                                <button onClick={this.rubahPesanan}>Pesan Sekarang</button>
                            </td>
                            <td> 
                                <ListMakanan listgambar ="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sotolamongan.png"/>
                                <button onClick={this.rubahPesanan}>Pesan Sekarang</button>
                            </td>
                            <td> 
                                <ListMakanan listgambar ="https://www.dbs.com/iwov-resources/images/newsroom/indonesia/Blog/masakan%20nusantara/nasi%20kentut.png"/>
                                <button onClick={this.rubahPesanan}>Pesan Sekarang</button>
                            </td>
                            <td> 
                                <ListMakanan listgambar ="https://pesona.travel/media/nasi-kuning-sarapan-khas-nusantara-bermakna-mendalam_144651_1140.jpg"/>
                                <button onClick={this.rubahPesanan}>Pesan Sekarang</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <br></br>
                <input type="text" onChange={this.pesanan}/>
                <h3>Pesanan Anda : {this.state.pesan}</h3>
            </div>
        )
    }
}
export default MenuMakanan;