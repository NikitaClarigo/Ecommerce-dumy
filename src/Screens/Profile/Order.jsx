import React, { useEffect } from 'react';
import './Profile.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import profile from '../../Assets/profile.png';
import profile1 from '../../Assets/profile1.png';
import profile2 from '../../Assets/profile2.png';
import profile3 from '../../Assets/profile3.png';
import profile4 from '../../Assets/profile4.png';
import profile5 from '../../Assets/profile5.png';
import profile6 from '../../Assets/profile6.png';
import p1 from '../../Assets/p1.png';
import { GrFormNext } from "react-icons/gr";
import { GoPrimitiveDot } from "react-icons/go";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
import windian2 from '../../Assets/windian2.jpg';
import { GrFormAdd } from "react-icons/gr";
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

function MyVerticallyCenteredModal(props) {

    const { user, setuser, onHide } = props

    const [image, setimage] = useState(user?.image)
    const [name, setName] = useState(user?.name)
    const [email, setEmail] = useState(user?.email)
    const [gender, setgender] = useState(user?.gender)
    const [mobile, setmobile] = useState(user?.mobile)
    const [dob, setdob] = useState(user?.dob)
    const [location, setlocation] = useState(user?.location)
    const [amobile, setamobile] = useState(user?.amobile)
    const [error, setError] = useState('')

    const handleUpdate = () => {
        if (!image && !name && !email && !gender && !mobile && !dob && !location && !amobile) {
            return setError('Name and email is required')
        }
        setError('')
        setuser({ image, name, email, gender, mobile, dob, location, amobile })
        return onHide()
    }

    useEffect(() => {
        console.log('modal called')
    }, [user])

    console.log(image, 'image---------->')
    function getBase64(e) {
        var file = e.target.files[0]
        let reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = () => {
            setimage(reader.result)
            // console.log( reader.result,' reader.result')
            // props.onImageSelect(reader.result)


        };
        reader.onerror = function (error) {
            console.log('Error: ', error);
        }
    }
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Edit Your Profile
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form>
                    <div className='row'>
                        <div className='col-md-12'>
                            <input className='w-100' id='choose-file' type={"file"} onChange={getBase64} />
                        </div>
                        <div className='col-md-12'>
                            <input className='w-100' type={"text"} placeholder="First Name" onInput={(e) => setName(e.target.value)} value={name} />
                        </div>
                        <div className='col-md-12'>
                            <input className='w-100' type={"email"} placeholder="Email Address" onInput={(e) => setEmail(e.target.value)} value={email} />
                        </div>
                        <div className='col-md-6'>
                            <input type={"text"} placeholder="Gender" onInput={(e) => setgender(e.target.value)} value={gender} />
                        </div>
                        <div className='col-md-6'>
                            <input type={"tel"} pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" placeholder="Mobile No." onInput={(e) => setmobile(e.target.value)} value={mobile} />
                        </div>
                        <div className='col-md-6'>
                            <input className='w-100' type={"date"} placeholder="DOB" onInput={(e) => setdob(e.target.value)} value={dob} />
                        </div>
                        <div className='col-md-6'>
                            <input type={"text"} placeholder="Location" onInput={(e) => setlocation(e.target.value)} value={location} />
                        </div>
                        <div className='col-md-12'>
                            <input className='tel w-100' pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" placeholder="Alternate Mobile No." onInput={(e) => setamobile(e.target.value)} value={amobile} />
                        </div>
                        <input type="submit" onClick={() => handleUpdate()}></input>
                    </div>
                </form>
            </Modal.Body>
        </Modal>
    );
}
function Termsmodal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Terms & Conditions
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <ul>
                    <li>This offer is valid until stocks last or till the offer ends.</li>
                    <li>Final Price is inclusive of the offer.</li>
                    <li>Offer is applicable on select products and brands.
                        In the event the user returns any/all products in the order placed during the Offer Period, thereby not maintaining the minimum purchase value, as required to avail the Offer,
                        he/she shall not be eligible for the Offer. Accordingly, the amount availed as a discount under the Offer shall stand deducted from any refund(s) processed for the returned
                        product(s).</li>
                </ul>
            </Modal.Body>
        </Modal>
    );
}
function Addadressmodal(props) {
    const { useradd, setuseradd, artists, setArtists, onHide, addAddress } = props

    const [addname, addsetName] = useState('')
    const [addmobile, addsetmobile] = useState('')
    const [addaddress, addsetaddress] = useState('')
    const [addpin, addsetpin] = useState('')
    const [addlocality, addsetlocality] = useState('')
    const [addcity, addsetcity] = useState('')
    const [adddistrict, addsetdistrict] = useState('')
    const [addtaddress, addsettaddress] = useState('')
    const [adderror, addsetError] = useState('')

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Add New Address
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form>
                    <div className='row'>
                        <div className='col-md-12'>
                            <input type={"text"} placeholder="First Name" onChange={e => addsetName(e.target.value)} />
                        </div>
                        <div className='col-md-12'>
                            <input className='w-100' type={"tel"} placeholder="Mobile No." onChange={e => addsetmobile(e.target.value)} />
                        </div>
                        <div className='col-md-12'>
                            <input className='text w-100' placeholder="Address (House No,Building,Street,Area)" onChange={e => addsetaddress(e.target.value)} />
                        </div>
                        <div className='col-md-6'>
                            <input name="pincode" type="text" placeholder='Pincode' onChange={e => addsetpin(e.target.value)} />
                        </div>
                        <div className='col-md-6'>
                            <input type={"text"} placeholder="Locality/Town" onChange={e => addsetlocality(e.target.value)} />
                        </div>
                        <div className='col-md-6'>
                            <input type={"text"} placeholder="City" onChange={e => addsetcity(e.target.value)} />
                        </div>
                        <div className='col-md-6'>
                            <input type={"text"} placeholder="District" onChange={e => addsetdistrict(e.target.value)} />
                        </div>
                        <div className='col-md-12'>
                                <input type={"text"} placeholder="Type of Address" onChange={e => addsettaddress(e.target.value)} />
                        </div>
                        <button type='button' onClick={() => {
                            if (addname !== '') {
                                addsetName('');
                                addAddress(addname)
                            }


                        }}>Add</button>
                    </div>
                </form>

            </Modal.Body>
        </Modal>
    );
}
function EditAddressModal(props) {
    const { usera, setauser, onHide } = props

    const [aname, asetName] = useState(usera?.aname)
    const [amobile, asetmobile] = useState(usera?.amobile)
    const [aaddress, asetaddress] = useState(usera?.aaddress)
    const [apin, asetpin] = useState(usera?.apin)
    const [alocality, asetlocality] = useState(usera?.alocality)
    const [acity, asetcity] = useState(usera?.acity)
    const [adistrict, asetdistrict] = useState(usera?.adistrict)
    const [ataddress, asettaddress] = useState(usera?.ataddress)
    const [aerror, asetError] = useState('')

    const ahandleUpdate = () => {
        if (!aname && !amobile && !aaddress && !apin && !amobile && !alocality && !acity && !adistrict && !ataddress) {
            return asetError('Name and email is required')
        }
        asetError('')
        setauser({ aname, amobile, aaddress, apin, amobile, alocality, acity, adistrict, ataddress })
        return onHide()
    }
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Edit Your Address
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form>
                    <div className='row'>
                        <div className='col-md-12'>
                            <input className='w-100' type={"text"} placeholder="Name" onInput={(e) => asetName(e.target.value)} value={aname} />
                        </div>
                        <div className='col-md-12'>
                            <input className='w-100' type={"tel"} placeholder="Mobile No." onInput={(e) => asetmobile(e.target.value)} value={amobile} />
                        </div>
                        <div className='col-md-12'>
                            <input className='text w-100' placeholder="Address (House No,Building,Street,Area)" onInput={(e) => asetaddress(e.target.value)} value={aaddress} />
                        </div>
                        <div className='col-md-6'>
                            <input name="pincode" type="number" placeholder='Pincode' onInput={(e) => asetpin(e.target.value)} value={apin} />
                        </div>
                        <div className='col-md-6'>
                            <input type={"text"} placeholder="Locality/Town" onInput={(e) => asetlocality(e.target.value)} value={alocality} />
                        </div>
                        <div className='col-md-6'>
                            <input type={"text"} placeholder="City" onInput={(e) => asetcity(e.target.value)} value={acity} />
                        </div>
                        <div className='col-md-6'>
                            <input type={"text"} placeholder="District" onInput={(e) => asetdistrict(e.target.value)} value={adistrict} />
                        </div>
                        <div className='col-md-12'>
                            <input type={"text"} placeholder="Type of Address" onInput={(e) => asettaddress(e.target.value)} value={ataddress} />
                        </div>
                        <button type="button" onClick={() => ahandleUpdate()}>Submit</button>
                    </div>
                </form>
            </Modal.Body>
        </Modal>
    );
}
let nextId = 0;
export default function Order() {
    // Update profileImage 
    const [image, setimage] = useState('')
    // Modal show
    const [modalShow, setModalShow] = React.useState(false);
    // Modal show
    const [addressmodalShow, addresssetModalShow] = React.useState(false);
    // Modal show
    // const [modalShow, setModalShow] = React.useState(false);
    // tab switch
    const switchTab1 = (id) => {
        const tab = document.getElementById('tab:r1:1')
        // console.log(tab?.click,'this is the tab click')
        tab.click()
    }
    const switchTab2 = (id) => {
        const tab = document.getElementById('tab:r1:2')
        // console.log(tab?.click,'this is the tab click')
        tab.click()
    }
    const switchTab3 = (id) => {
        const tab = document.getElementById('tab:r1:3')
        // console.log(tab?.click,'this is the tab click')
        tab.click()
    }
    // setuser
    const [user, setuser] = useState({
        'name': 'Nikita',
        'email': 'nikita@mailbhejo.com',
        'gender': 'Female',
        'mobile': '9876543210',
        'dob': '23-12-2000',
        'location': 'indore',
        'amobile': '1234567890',
        'image': profile
    })
    // asetuser
    const [usera, setauser] = useState([{
        'aname': 'Nikita',
        'amobile': '9876543210',
        'aaddress': 'Airport road',
        'apin': '452001',
        'alocality': 'indore',
        'acity': 'indore',
        'adistrict': 'Madhya Pradesh',
        'ataddress': 'Home'
    }, {
        'aname': 'Nikita------->',
        'amobile': '9876543210',
        'aaddress': 'Airport road',
        'apin': '452001',
        'alocality': 'indore',
        'acity': 'indore',
        'adistrict': 'Madhya Pradesh',
        'ataddress': 'Office'
    }])

    const removehandler = (itemindex) => {

        let data = [...usera]
        data.splice(itemindex, 1)
        setauser(data)
        console.log('clicked', data)

    };

    return (

        <div>
            <div className='container order-container'>
                <Tabs className="order-tab">
                    <TabList className="order-tab__tab-list">
                        <div className='row'>
                            <div className='col-md-3'>
                                <img src={user.image} className="profile-round" alt="something" />
                            </div>
                            <div className='col-md-9'>
                                <h5 className='m-0'><b>Account</b></h5>
                                <p className='username'>{user.name}</p>
                            </div>
                        </div>
                        <hr />
                        <Tab className="order-tab__tab">
                            <p>Overview</p>
                            <hr />
                        </Tab>
                        <Tab className="order-tab__tab">
                            <p>Orders & Returns</p>
                            <hr />
                        </Tab>
                        <Tab className="order-tab__tab">
                            <p>Coupons</p>
                            <hr />
                        </Tab>
                        <Tab className="order-tab__tab">
                            <p>Addresses</p>
                            <hr />
                        </Tab>
                        <Tab className="order-tab__tab">
                            <p>Terms of Use</p>
                            <hr />
                        </Tab>
                        <Tab className="order-tab__tab">
                            <p>Privacy Policy</p>
                        </Tab>
                    </TabList>

                    <TabPanel>
                        <div className="order-tab-panel-content">
                            <div className='row profile-box'>
                                <div className='col-md-3'>
                                    {/*  this is the image */}
                                    <img src={user.image} alt="something" width={"100%"} />
                                </div>
                                <div className='col-md-9 profile-mail'>
                                    <p><b>{user.name}</b></p>
                                    <p>{user.email}</p>
                                    <p>{user.gender}</p>
                                    <p>{user.mobile}</p>
                                    <p><b>DOB : </b>{user.dob}</p>
                                    <p>{user.location}</p>
                                    <p><b>Alternate Mobile No. :</b>{user.amobile}</p>
                                </div>
                                <button className='edit-profile-button' onClick={() => setModalShow(true)}>Edit profile</button>
                                <MyVerticallyCenteredModal
                                    onImageSelect={setimage}
                                    show={modalShow}
                                    user={user}
                                    setuser={setuser}
                                    onHide={() => setModalShow(false)}
                                />
                            </div>
                            <div className='tb-box'>
                                <div className='row'>
                                    <div className='col-md-3 other-box' onClick={() => switchTab1('orderTab')}>
                                        <div className='text-center'>
                                            <img src={profile1} alt="something" />
                                            <h6>Orders</h6>
                                            <p>Check Your All Orders Status</p>
                                        </div>
                                    </div>
                                    <div className='col-md-3  other-box'>
                                        <Link to={"/Wishlist"}>
                                            <div className='text-center'>
                                                <img src={profile2} alt="something" />
                                                <h6>Wishlist</h6>
                                                <p>All Your Favourite Product Collection</p>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className='col-md-3 other-box' onClick={() => switchTab3('orderTab')}>
                                        <div className='text-center'>
                                            <img src={profile4} alt="something" />
                                            <h6>Addresses</h6>
                                            <p>Save addresses for Hasle-free Checkout</p>
                                        </div>
                                    </div>
                                    <div className='col-md-3 other-box' onClick={() => switchTab2('orderTab')}>
                                        <div className='text-center'>
                                            <img src={profile5} alt="something" />
                                            <h6>Coupons</h6>
                                            <p>Manage Coupons for additional discount</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button className='Logout-button'>Logout</button>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="order-tab-panel-content">
                            <div>
                                <button className='filter-button'>All</button>
                                <button className='filter-button'>Ordered</button>
                                <button className='filter-button'>Shipped</button>
                                <button className='filter-button'>Delivered</button>
                                <button className='filter-button'>Cancelled</button>
                                <button className='filter-button'>Exchange</button>
                                <button className='filter-button'>Return</button>
                                <button className='filter-button'>Others</button>
                            </div>
                            <div className='row order-box'>
                                <div className='col-md-6'>
                                    <p>5th November</p>
                                </div>
                                <div className='col-md-6 text-end'>
                                    <p>Order Id : 98147213891</p>
                                </div>
                                <hr />
                                <div className='col-md-2'>
                                    <img src={windian2} alt="something" width="100%" />
                                </div>
                                <div className='col-md-9'>
                                    <h6>Kaynat Women's Rayon Green Print Kurta & duptta Set Rayon (Size: S-3XL)</h6>
                                    <GoPrimitiveDot className='cancel' /> Cancelled<br />
                                </div>
                                <div className='col-md-1'>
                                    <GrFormNext />
                                </div>
                                <hr className='mt-3' />
                            </div>
                            <div className='row order-box'>
                                <div className='col-md-6'>
                                    <p>25th September</p>
                                </div>
                                <div className='col-md-6 text-end'>
                                    <p>Order Id : 98147213891</p>
                                </div>
                                <hr />
                                <div className='col-md-2'>
                                    <img src={p1} alt="something" width="100%" />
                                </div>
                                <div className='col-md-9'>
                                    <h6>Ethluxis Men's Silk Blend Kurta, Churidar Pyjama With Nehru Jacket (ETH-TRI-FLR_Navy Blue_42)</h6>
                                    <GoPrimitiveDot className='deliver' /> Delivered on 29th Sepetember,2022<br />
                                    <AiFillStar className='star' />
                                    <AiFillStar className='star' />
                                    <AiFillStar className='star' />
                                    <AiFillStar className='star' />
                                    <AiOutlineStar className='star' />
                                </div>
                                <div className='col-md-1'>
                                    <GrFormNext />
                                </div>
                                <hr className='mt-3' />
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="order-tab-panel-content">
                            <div className='row coupon-box'>
                                <div className="coupon_area col-md-6">
                                    <div className="coupon_content">
                                        <h2>10% Discount</h2>
                                        <h3>on your fist order</h3>
                                        <h3 className="code_text">code</h3>
                                        <h3 className="code">eMartoffer</h3><br></br>
                                        <p onClick={() => setModalShow(true)}>View T&C</p>
                                        <Termsmodal
                                            show={modalShow}
                                            onHide={() => setModalShow(false)}
                                        />
                                    </div>
                                </div>
                                <div className="coupon_area col-md-6">
                                    <div className="coupon_content">
                                        <h2>10% Discount</h2>
                                        <h3>on your fist order</h3>
                                        <h3 className="code_text">code</h3>
                                        <h3 className="code">eMartoffer</h3>
                                        <p onClick={() => setModalShow(true)}>View T&C</p>
                                        <Termsmodal
                                            show={modalShow}
                                            onHide={() => setModalShow(false)}
                                        />
                                    </div>
                                </div>
                                <div className="coupon_area col-md-6">
                                    <div className="coupon_content">
                                        <h2>10% Discount</h2>
                                        <h3>on your fist order</h3>
                                        <h3 className="code_text">code</h3>
                                        <h3 className="code">eMartoffer</h3><br></br>
                                        <p onClick={() => setModalShow(true)}>View T&C</p>
                                        <Termsmodal
                                            show={modalShow}
                                            onHide={() => setModalShow(false)}
                                        />
                                    </div>
                                </div>
                                <div className="coupon_area col-md-6">
                                    <div className="coupon_content">
                                        <h2>10% Discount</h2>
                                        <h3>on your fist order</h3>
                                        <h3 className="code_text">code</h3>
                                        <h3 className="code">eMartoffer</h3>
                                        <p onClick={() => setModalShow(true)}>View T&C</p>
                                        <Termsmodal
                                            show={modalShow}
                                            onHide={() => setModalShow(false)}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="order-tab-panel-content">
                            <div className='row'>
                                <div className='col-md-6 text-start'>
                                    <h4>Saved Addresses</h4>
                                </div>
                                <div className='col-md-6 text-end'>
                                    <button className='new-address-button' onClick={() => setModalShow(true)}><GrFormAdd className='plus-icon' />Add New Address</button>
                                    <Addadressmodal
                                        addAddress={(address) => {
                                            let data = [...usera]
                                            data.push(
                                                {
                                                    'aname': 'static',
                                                    'amobile': 'static',
                                                    'aaddress': address,
                                                    'apin': 'static',
                                                    'alocality': 'static',
                                                    'acity': 'static',
                                                    'adistrict': 'Madhya Pradesh',
                                                    'ataddress': 'home'

                                                })
                                            setauser(data)
                                            setModalShow(false)
                                        }}
                                        show={modalShow}
                                        onHide={() => setModalShow(false)}
                                    />
                                </div>
                            </div>
                            <p className='username'>Default Address</p>
                            <div className='row add'>
                                {/* usera */}
                                {usera.map((e, s) => {
                                    return (
                                        <div className='address-box col-md-6'>
                                            <button className='cat-button'>{e.ataddress}</button>
                                            <p className='username'><b>{e.aname}</b></p><br />
                                            <p className='username'>{e.aaddress}</p>
                                            <p className='username'>{e.alocality}</p>
                                            <p className='username'>{e.acity} - {e.apin}</p>
                                            <p className='username'>{e.adistrict}</p><br />
                                            <p className='username'>Mobile : {e.amobile}</p>
                                            <div className='row editbutton'>
                                            {usera && (
                                                    <MdDelete onClick={() => removehandler(s)} />
                                                )}
                                            </div>
                                        </div>
                                    )
                                })}








                            </div>
                        </div>
                    </TabPanel>
                    {/* Terms of use */}
                    <TabPanel>
                        <div className="order-tab-panel-content terms">
                            <h2 className='text-center'>emart Terms of Use</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquet pellentesque ipsum, maximus sagittis ex iaculis et. Praesent nibh velit, ultrices vel malesuada eu, vehicula nec lectus. Sed ut mi in lacus vehicula dignissim. Sed quis augue ut massa cursus scelerisque. Curabitur id orci ut massa tempus pellentesque ut ac velit. Aliquam faucibus lorem ac ante cursus condimentum. Donec pretium elit dolor, at ornare libero porta et. Pellentesque lacinia sapien in mi convallis, non varius augue tincidunt. Duis convallis elit ac sem pretium, vitae rhoncus enim mattis. Praesent non rhoncus nulla, eu venenatis sem. Sed posuere accumsan ex quis accumsan. Donec pellentesque fermentum leo et pharetra.
                            </p>
                            <p>
                                Vivamus lectus sapien, venenatis at bibendum nec, sodales ac nulla. Suspendisse ornare nisi eget turpis ullamcorper, vel laoreet neque bibendum. In augue nisl, pellentesque vel vehicula a, tristique vitae nisl. Donec faucibus tortor at finibus convallis. Quisque ac erat a lectus consequat porta ac quis eros. Nulla in elit eleifend, auctor est eu, ullamcorper nulla. Duis nec nibh commodo, rhoncus leo quis, egestas magna. Maecenas fermentum, velit ac egestas tincidunt, risus nunc varius erat, eget euismod mauris felis a turpis.
                            </p>
                            <p>
                                Fusce arcu velit, molestie eget ante eget, ornare imperdiet nulla. Integer ut nunc nisl. Maecenas at sagittis mauris. Nunc volutpat aliquet arcu, eget congue enim posuere non. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse sollicitudin nec felis id egestas. Nullam et metus vulputate diam ornare commodo. Nulla vitae purus nunc. Nunc ut elementum risus. Praesent ullamcorper lobortis massa, vitae sagittis dolor malesuada accumsan. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec non magna risus.
                            </p>
                        </div>
                    </TabPanel>
                    {/* Privacy Policy */}
                    <TabPanel>
                        <div className="order-tab-panel-content terms">
                            <h2 className='text-center'>emart Privacy policy</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquet pellentesque ipsum, maximus sagittis ex iaculis et. Praesent nibh velit, ultrices vel malesuada eu, vehicula nec lectus. Sed ut mi in lacus vehicula dignissim. Sed quis augue ut massa cursus scelerisque. Curabitur id orci ut massa tempus pellentesque ut ac velit. Aliquam faucibus lorem ac ante cursus condimentum. Donec pretium elit dolor, at ornare libero porta et. Pellentesque lacinia sapien in mi convallis, non varius augue tincidunt. Duis convallis elit ac sem pretium, vitae rhoncus enim mattis. Praesent non rhoncus nulla, eu venenatis sem. Sed posuere accumsan ex quis accumsan. Donec pellentesque fermentum leo et pharetra.
                            </p>
                            <p>
                                Vivamus lectus sapien, venenatis at bibendum nec, sodales ac nulla. Suspendisse ornare nisi eget turpis ullamcorper, vel laoreet neque bibendum. In augue nisl, pellentesque vel vehicula a, tristique vitae nisl. Donec faucibus tortor at finibus convallis. Quisque ac erat a lectus consequat porta ac quis eros. Nulla in elit eleifend, auctor est eu, ullamcorper nulla. Duis nec nibh commodo, rhoncus leo quis, egestas magna. Maecenas fermentum, velit ac egestas tincidunt, risus nunc varius erat, eget euismod mauris felis a turpis.
                            </p>
                            <p>
                                Fusce arcu velit, molestie eget ante eget, ornare imperdiet nulla. Integer ut nunc nisl. Maecenas at sagittis mauris. Nunc volutpat aliquet arcu, eget congue enim posuere non. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse sollicitudin nec felis id egestas. Nullam et metus vulputate diam ornare commodo. Nulla vitae purus nunc. Nunc ut elementum risus. Praesent ullamcorper lobortis massa, vitae sagittis dolor malesuada accumsan. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec non magna risus.
                            </p>
                        </div>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    )
}
