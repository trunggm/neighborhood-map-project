// JavaScript Document
// Map view in site
var map;
var markers = [];

// infowindow
var infowindow = new google.maps.InfoWindow();
var bounds = new google.maps.LatLngBounds();

// List location
var locations = [
  {
    title: 'Ngoc Son Temple',
    position: {lat: 21.0306818, lng: 105.8524206},
    street: 'Đinh Tiên Hoàng, Hàng Trống',
    city: 'Hoàn Kiếm, Hà Nội',
    url: 'https://vi.wikipedia.org/wiki/%C4%90%E1%BB%81n_Ng%E1%BB%8Dc_S%C6%A1n',
    id: 'location0',
    info: 'Đền Ngọc Sơn là một ngôi đền thờ nằm trên đảo Ngọc của hồ Hoàn Kiếm ở Hà Nội, Việt Nam. Đây cũng là một di tích quốc gia đặc biệt của Việt Nam được xếp hạng đợt 4.'
  },
  {
    title: 'Ba Kieu Temple',
    position: {lat: 21.0311149, lng: 105.8534995},
    street: '59 Đinh Tiên Hoàng, Hàng Trống',
    city: 'Hoàn Kiếm, Hà Nội',
    url: 'https://vi.wikipedia.org/wiki/%C4%90%E1%BB%81n_B%C3%A0_Ki%E1%BB%87u',
    id: 'location1',
    info: 'Đền Bà Kiệu, tên chữ là Thiên Tiên điện, là một ngôi đền ở ven phía đông hồ Gươm, Hà Nội, xế cửa đền Ngọc Sơn. Đền thờ ba vị nữ thần: Liễu Hạnh Công chúa, Quỳnh Hoa và Quế Nương.'
  },
  {
    title: 'City View Cafe',
    position: {lat: 21.032065, lng: 105.8517118},
    street: '7 Đinh Tiên Hoàng, Hàng Bạc',
    city: 'Hoàn Kiếm, Hà Nội',
    url: 'http://www.cityviewcafe.com.vn/',
    id: 'location2',
    info: 'City View Cafe, đây là nơi có thể vừa ngắm nhìn  phong cảnh Hồ Gươm và phố cổ từ trên cao và tận hưởng không khí thoáng mát , niềm ước ao của bao người khi đến Hà Nội. Cửa hàng phục vụ các đồ ăn uống, ẩm thưc Âu, Á...., do đầu bếp chuyên nghiệp phục vụ. Đồng thời City View Cafe còn là nơi tổ chức liên hoan, sinh nhật, họp lớp... rất lý tưởng.'
  },
  {
    title: 'The Note Coffee',
    position: {lat: 21.0316012, lng: 105.8508702},
    street: '64 Lương Văn Can',
    city: 'Hoàng Mai, Hà Nội',
    url: 'https://www.facebook.com/TheNoteCoffee/',
    id: 'location3',
    info: 'The Note Coffee là quán cafe đặc biệt với hàng chục nghìn những dòng tin nhắn do khách hàng để lại, trên những tờ Note, được dán ở khắp mọi nơi...'
  },
  {
    title: 'Pho Co',
    position: {lat: 21.0322452, lng: 105.851178},
    street: '11 pho the dao, Hàng Trống, Hàng Đào',
    city: 'Hoàn Kiếm, Hà Nội',
    url: 'https://vi.wikipedia.org/wiki/Khu_ph%E1%BB%91_c%E1%BB%95_H%C3%A0_N%E1%BB%99i',
    id: 'location4',
    info: 'Khu phố cổ Hà Nội là tên gọi thông thường của một khu vực đô thị có từ lâu đời của Hà Nội nằm ở ngoài hoàng thành Thăng Long. Khu đô thị này tập trung dân cư hoạt động tiểu thủ công nghiệp và buôn bán giao thương, hình thành lên những phố nghề đặc trưng, mang những nét truyền thống riêng biệt của cư dân thành thị, kinh đô. Ngày nay khu phố cổ Hà Nội là điểm đến hấp dẫn cho những ai muốn tìm hiểu về Thăng Long - Đông Đô - Hà Nội.'
  },
  {
    title: 'Lotus Water Puppet Theater',
    position: {lat: 21.0284818, lng: 105.8510949},
    street: '16 Lê Thái Tổ, Hàng Trống',
    city: 'Hoàn Kiếm, Hà Nội',
    url: 'http://bongsenwaterpuppet.com/',
    id: 'location5',
    info: '“Múa rối nước Bông Sen” là chương trình quy tụ nhiều nghệ nhân, nghệ sỹ lão làng từ nhiều làng nghề truyền thống về nghề rối trong cả nước. Dưới con mắt tinh tường của những đạo diễn tài ba, nghệ thuật cổ truyền độc đáo Múa rối nước duy nhất chỉ có ở Việt Nam được “Múa rối nước Bông Sen” thổi hồn như một làn gió mới, đậm chất truyền thống, pha chút đương đại và mang tính thời cuộc, gần gũi với nhịp sống mới.'
  },
  {
    title: 'The Huc Bridge',
    position: {lat: 21.0307675, lng: 105.8528229},
    street: 'Cầu Thê Húc, Lý Thái Tổ',
    city: 'Hoàn Kiếm, Hà Nội',
    url: 'https://vi.wikipedia.org/wiki/C%E1%BA%A7u_Th%C3%AA_H%C3%BAc',
    id: 'location6',
    info: 'Cầu Thê Húc là cây cầu ở hồ Hoàn Kiếm, Hà Nội, thủ đô của Việt Nam.Nối từ Bờ Hồ ra hòn đảo nhỏ nơi có đền Ngọc Sơn, cây cầu này màu đỏ son, làm bằng gỗ, có nhiều trụ liên tiếp. Cầu được Thần Siêu Nguyễn Văn Siêu xây dựng vào năm 1865. Tên của cầu có nghĩa là "nơi đậu ánh sáng Mặt Trời buổi sáng sớm" hay "Ngưng tụ hào quang" (棲旭).'
  },
  {
    title: 'Ly Thai To Garden',
    position: {lat: 21.0274277, lng: 105.8546924},
    street: 'Đinh Tiên Hoàng, Tràng Tiền',
    city: 'Hoàn Kiếm, Hà Nội',
    url: 'https://vi.wikipedia.org/wiki/V%C6%B0%E1%BB%9Dn_hoa_Ch%C3%AD_Linh_(H%C3%A0_N%E1%BB%99i)',
    id: 'location7',
    info: 'Vườn hoa Chí Linh là tên gọi khác của Vườn hoa Lý Thái Tổ, hiện là nơi đặt tượng đài vua Lý Thái Tổ (974 – 1028) -người có công khai lập kinh thành Thăng Long. Vườn hoa nằm trên đường Đinh Tiên Hoàng, quận Hoàn Kiếm, tại trung tâm thủ đô Hà Nội, Việt Nam.'
  },
];

// init map to view
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 21.027849605476565, lng: 105.85228443145752},
    zoom: 16
  });

  // create marker
  createMarkers(map);
}

initMap();

//create marker and push to markers
function createMarkers(map) {
  for (var i = 0; i < locations.length; i++) {
    var title = locations[i].title;
    var position = locations[i].position;
    var id = locations[i].id;
    var marker = new google.maps.Marker({
      map: map,
      position: position,
      title: title,
      animation: google.maps.Animation.DROP,
      id: id
    });

    // add some property to marker
    marker.info = locations[i].info;
    marker.url = locations[i].url;
    marker.street = locations[i].street;
    marker.city = locations[i].city;
    marker.location = locations[i].position;

    markers.push(marker);

    markers[i].addListener('click', function () {
      toggleBounce(this);
      populateInfoWindw(this, infowindow);
    });

    bounds.extend(markers[i].position);
  }

  map.fitBounds(bounds);
}


function populateInfoWindw(marker, infowindow) {
  if (infowindow.marker != marker) {
    infowindow.marker = marker;
    infowindow.setContent('');
    // set maker = null when close marker
    infowindow.addListener('closeclick', function () {
      marker.setAnimation(null);
      infowindow.marker = null;
    });

    // add street view
    var streetViewService = new google.maps.StreetViewService();
    var radius = 50;
    // In case the status is OK, which means the pano was found, compute the
    // position of the streetview image, then calculate the heading, then get a
    // panorama from that and set the options
    function getStreetView(data, status) {
      if (status == google.maps.StreetViewStatus.OK) {
        var nearStreetViewLocation = data.location.latLng;
        var heading = google.maps.geometry.spherical.computeHeading(
          nearStreetViewLocation, marker.position);
          infowindow.setContent('<div>' + marker.title + '</div>'+
                                '<div id="pano"></div>' +
                                '<div>Street: '+marker.street+'</div>' + '<div>City: '+marker.city+'</div>'+
                                '<div><a href="'+marker.url+'" target="_blank">Information</a>'
                              );
          var panoramaOptions = {
            position: nearStreetViewLocation,
            pov: {
              heading: heading,
              pitch: 30
            }
          };
        var panorama = new google.maps.StreetViewPanorama(
          document.getElementById('pano'), panoramaOptions);
      } else {
        infowindow.setContent('<div>' + marker.title + '</div>' +
          '<div>No Street View Found</div>');
      }
    }
    // Use streetview service to get the closest streetview image within
    // 50 meters of the markers position
    streetViewService.getPanoramaByLocation(marker.position, radius, getStreetView);
    // Open the infowindow on the correct marker.
    infowindow.open(map, marker);
  }
}

function toggleBounce(marker) {
  for (var i = 0; i < markers.length; i++) {
    if (markers[i] != marker) {
      markers[i].setAnimation(null);
    }
  }
  if (marker.getAnimation() !== null) {
    marker.setAnimation(null);
  } else {
    marker.setAnimation(google.maps.Animation.BOUNCE);
  }
  bounds.extend(marker.position);
  map.fitBounds(bounds);
}

// show marker on map function
function showMarker(marker, map) {
  marker.setMap(map);
}

// show marker on map function
function hideMarker(marker) {
  marker.setMap(null);
}

// knockout js view model
function addListItem(name, id) {
  var self = this;
  self.name = name;
  self.idItem = ko.observable(id);
}

function addListItemModel () {
  var self = this;
  var listItem = [];
  for (var i = 0; i < locations.length; i++) {
    listItem.push(new addListItem(locations[i].title, i));
  }
  self.loadList = ko.observableArray(listItem);
}

ko.applyBindings(new addListItemModel());
clickListItem();

function clickListItem() {
  for (var i = 0; i < locations.length; i++) {
    $('#loc'+i).click(function () {
      var id = Number(this.id.replace('loc', ''));
      populateInfoWindw(markers[id], infowindow);
      toggleBounce(markers[id]);
    });
  }
}

// search box
$('#search-btn').click(function () {
  var searchItem = $('#search-box').val().toLowerCase();
  for (var i = 0; i < locations.length; i++) {
    var title = locations[i].title.toLowerCase();
    if (title.search(searchItem) != -1) {
      $('#loc'+i).show();
      showMarker(markers[i], map);
      bounds.extend(markers[i].position);
    }
    else {
      $('#loc'+i).hide();
      hideMarker(markers[i]);
    }
  }
  map.fitBounds(bounds);
});


// collapsed menu when click to menu button
$('#menu-left-sidebar').click(function () {
  console.log('click');
  $('.left-sidebar-wrapper').toggleClass('collapsed');
  $('.main-wrapper').toggleClass('collapsed');
});

// add wiki to map
var wikiUrl = '';
