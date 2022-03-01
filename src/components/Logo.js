import { Component } from "react";

const styles = {
    logo: {
        fontWeight: '700',
        fotSize: '2rem'
    }
};

class Logo extends Component {
    render() {
        return (
             <div style ={ styles.logo }>
                 Shop
             </div>
        );
    }
}

export default Logo;