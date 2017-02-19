let extentions = JSON.parse(require("fs").readFileSync("jpe-manager.conf")) ;
for (let doing in extentions) {
	
	console.log("Loading extention",doing) ;
	let currentLock = new server.lock("lock-"+doing,extentions[doing].mode,extentions[doing].hosts) ;
	let result = server.loadExt(extentions[doing].path,currentLock) ;
	if (result.loaded) {
		
		console.log(doing,"was loaded successfuly.") ;
		
	}
	else {
		
		console.log(doing,"failed to load:") ;
		console.log(result.error) ;
		
	}
	
}
