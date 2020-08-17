function setbackground(element){
    var n=element.src;
    console.log(n);
    switch(n){
    	case "file:///C:/Users/Admin/Desktop/coursera%20Web%20development/images%20background/img.jpg":
    		document.getElementById("image").setAttribute("style","background-color:#c9a475;background-image:url("+element.src+");background-size:100%;background-repeat:no-repeat;");

    		break;
    	case "file:///C:/Users/Admin/Desktop/coursera%20Web%20development/images%20background/bridge.jpg":
    		
    		document.getElementById("image").setAttribute("style","background-color:#e4738a;background-image:url("+element.src+");background-size:100%;background-repeat:no-repeat;");

    		break;
    	case "file:///C:/Users/Admin/Desktop/coursera%20Web%20development/images%20background/trees.jpg":
    		document.getElementById("image").setAttribute("style","background-color:#9df57d;background-image:url("+element.src+");background-size:100%;background-repeat:no-repeat;");

    		break;
    	case 'file:///C:/Users/Admin/Desktop/coursera%20Web%20development/images%20background/moon.jpg':
    		document.getElementById("image").setAttribute("style","background-color:#a44ad6;background-image:url("+element.src+");background-size:100%;background-repeat:no-repeat;");

    		break;
    	case 'file:///C:/Users/Admin/Desktop/coursera%20Web%20development/images%20background/roadbridge.jpg':
    		document.getElementById("image").setAttribute("style","background-color:#b57b59;background-image:url("+element.src+");background-size:100%;background-repeat:no-repeat;");

    		break;
    	case 'file:///C:/Users/Admin/Desktop/coursera%20Web%20development/images%20background/light.jpg':
    		document.getElementById("image").setAttribute("style","background-color:#2b2927;background-image:url("+element.src+");background-size:100%;background-repeat:no-repeat;");

    		break;

    }

	
}