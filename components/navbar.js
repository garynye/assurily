import Link from 'next/link';

const navbar = () => (
    <div>
        <ul>
            <li><Link href="/"><a>Home</a></Link></li>
            <li><Link href="/about"><a>About</a></Link></li>
        </ul>
<style jsx>{`
ul {
    background: #333;
    color: fff;
    list-sytle: none;
    display: flex;
}

ul li{
    font-size: 16px;
    margin-right: 20px;

}

ui li a{
    color: #fff;
    text-decoration: none;
    
}

`}</style>
    </div>
);

export default navbar;