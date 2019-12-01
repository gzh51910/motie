import React,{Component} from 'react';
import FooterPart from '@@/FooterPart';
import FooterQr from '@@/FooterQr';
import RankTop from '@@/RankTop';
import RankLeft from '@@/RankLeft';

class Rank extends Component{
    render(){
        return (
            
            <div>
                <RankTop/>
                <RankLeft/>
                <div className="rank-background-img">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE0AAACXCAMAAABncibLAAAAM1BMVEUAAAD84eH84eH84eH84eH84eH84eH84eH84eH84eH84eH84eH84eH84eH84eH84eH84eHMQFkfAAAAEHRSTlMAQMCA8BDQoFAgcDCwkOBgJIlFGwAAAbBJREFUaN7t2ltuwyAUhGEDB3OPZ/+rbSvRl7RpYvl/qBRmAZ+MDgwS8obEheQ/kwgqmWauW14SpMUuYZozcVqQOC2J0+KuH0ExARigeYFaEqgFgVoWqDUDtXgTp8VdD4NiQjGhmFBMZ7cGpx0mTItdwrR8E6aVLlFaDBKllWSitKNLQrRydJMAzbnQ5xQvaa0Ob5q5pJU6lwZoxy5JiBaDSZSWTaK0mITkuwSZTAzUhkDNidQ8qRWRWkW1jmoe1QzVRGoN1TKqhbfRKqo5/ePdm1CtGNqWB6jNu5S8AZNx2peXh+e0GfcgJ7TnaaiWUS2gmke1G6qJ1ByqVVQbqOZRzUitiNQcqgVUS6i2o5pIrb2O7WBVSh0daSDPlTJYlVJBR4qeK09WpRJZlaroSB1ZlYpkVRo7UvZcoVV5oFXpVlWuqlxVuapyVeWqylWVqypXVa6qfPOqPDHSgY40k5ptpJZQzZGaR9+fHfc2Pj8Nq7f2mpaYDp9xZ3YHci/s8WWt2NMJTAxZ67jwi+x9LG8nU/xDK8TtfPKv3m1a59PGfjfI0bYria4G/5Ue6p/H8gP7c6KsWARVeQAAAABJRU5ErkJggg=="/>
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAACLCAMAAADWFH66AAAAM1BMVEUAAADy8ufy8ufy8ufy8ufy8ufy8ufy8ufy8ufy8ufy8ufy8ufy8ufy8ufy8ufy8ufy8udKu8cLAAAAEHRSTlMAQIDwEMDgMKBgULAg0JBwyBA0WgAAAoNJREFUaN7tmcuuqzAMRR3nAYQA+/+/9l7pDCydlgZM9qDSWaNOumQ5juMEGUYK/2kykBBUcy4wSs6qYXoibVVN+QandjpWsw5U17ngAg5vBDBe3XbzDlWHFQBDHTLucUdMUacZ4KhrBEedVoCjDhEk9QKQ1DPcdM0s9QqWegZLPYOlVrDUFSx1izT1BpZawVJPoKkzTV1BUxeaesEIeEHjcdBx1RpCqPoyrT0sj7mK0TQCxqOaXtvvE1phPOilsb6LK35SR1xis5Dfu93bZUu9ZuzMh5nPq8CZj5LklGBqT31MYpztOF+qjysjhusMyPIRfaBunTHRr97F+LCOjlksJqda0UOlw+FQW9CEZbTCcxRf6O1w6RJP1OLch6/7+e64rtJlN/WdjKx9c4qnasmeVmosOFen+MRs/z45g9xm2T+POC07WsdLuz9LWMEvcrhiTuVUbUxqoSPOXfFrCfQfHI8bb46z4xXHYcZYM0mdMkjqaQNJfUQ41N7nqeEhG4OyTFGnHeCoa4Fb7X9dfLp8HPWUAYo6KcBRh4Ie/uXjqJcIjrplgKNWXMSxfBx1mgGO+ojgqMOGWwzPheEu5T7OUu4TdWwpG3MaWspGbq6zr08Jwgk5Hr7m2WdPpI+BaxNOlrcgnCzHZWxbNjRdE7fNkWRKx8iB1OTK4hpq+0RNpPY5N7nKTkiy3dAuU6r77vC82Zs5Opv90K/xeRKOuQQhmaFX6Jr98MwwM0kdQMDqmaJOGxhYR2KoAzjYsx9BXUGCFzQkgQUvH7Ap6U/9ow5gIYf9/qKEfKd6gfE9FSJgIbKChM0JBLVs4EAbFYDOVfz5iFNAQH5QgtweKPY8Xm20MJJ/DcXPOjNJRbgAAAAASUVORK5CYII="/>
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFcAAACLCAMAAAAj6vUKAAAAM1BMVEUAAADy8ufy8ufy8ufy8ufy8ufy8ufy8ufy8ufy8ufy8ufy8ufy8ufy8ufy8ufy8ufy8udKu8cLAAAAEHRSTlMAQMCA8DAQ4KBgUNCwkCBwRm2jmgAAAs5JREFUaN7t2lvOozAMBWDHuYckeP+rnYsqoc5fTDA9b3MW8CmFKBxq6FuZzrn5LSy55j3zJkeYh2/uwfJ8YTmPxXS+B4U0udGzohndVrJCGd04guJY3coKYnXTnkW+7+5B5PtuyyLfd1MXAbgtCMItIgA3bYJwYxaEG4M8iMYi3JQF4m4CcYdA3CYQNwWMOwTiTsG4BeNOwbgF5AaMW2U9G/9JXnL7ohlKOw6pNvKVu6j6RO+JRXXnEtvTp43EiutWFlvpc/wjN0Q6y1BcA3uENdfOkjO7kdRsJ266YCvpGScuZZUtl0X5zC0am9OV685cp98zs0ussnY3PmHJH+7iSbklhdP2mQ4PWslUe0nkH4t1tBR/0c/i20HdGy0mX/fq5Hb/Ny3RanZRXHtmwLgsELcIwk1FEK7LAnAbi3zRTe532of/e+xiHfyv9tx1XZRY3cgiAHcXQbhFIO4uEDcKxmWMGwXjFpCbMW4UjNtArge5/N+FujvITQHjUgW55EEutYxxKe0Z4C5Oicic2PxgzheuPW5k3bWnBoxLacO4lDLGJQdyabtyY/WdmUedt1yvual2OdLjDbedu7MEeY83X+CLk6o8duMmn1KMB/PlOKhZ75vOSkimJ+oVK+JNhVAfDK4vOMkHd4iWaimEC+WzW/r2SolJC2746Tq5SDP04pVXhmLobcedNF+Ijz95qRn5+zVzab4S0u2WuTZmGrdfktTdoG8J9chaLJ4h3mNltXcGp52PuqtnJK202l0Jfr6jUyms90bbuXvf3J/svh/o6n6wB++SQPJ6MAHcLoi8zjOAOwWRV3MFuJgL8aoqELeKQFzaQG4EueRBLhWQSxvITR3gAi6F9rZvD8+f33E8T3HKrMuaMCZ9SH0mc02nXbZY0W2fFyOwftsM5VipRrexra+z7PHWLNAX1sXMY3cPPn3vb9++M3P3vjptkb8AYMSb9jkZ8uoAAAAASUVORK5CYII="/>

                </div>
                {/* <FooterPart/>
                <FooterQr/> */}
            </div>
        )
    }
}

export default Rank;