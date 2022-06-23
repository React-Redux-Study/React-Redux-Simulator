const ViewerListComponent = ({props, urlPath}) => {

    return (
        <>
            <div>
                파일 목록
            </div>
            <div className="w-full grid grid-cols-1 md:grid-cols-1 gap-1 border">
                <div className="w-full flex justify-between items-center w-full text-center border-b bg-gray-100 font-bold">
                    <div className="w-28 text-center px-4 py-2 text-xs text-gray-800 truncate">#</div>
                    <div className="w-60 text-center px-4 text-xs text-gray-800 truncate">mirror_id</div>
                    <div className="w-80 text-center px-4 text-xs text-gray-800 truncate">mirror_regex</div>
                    <div className="w-full text-center px-4 text-xs text-gray-800 truncate">path</div>
                    <div className="w-full text-center px-4 text-xs text-gray-800 truncate">name</div>
                    <div className="w-full text-center px-4 text-xs text-gray-800 truncate">data</div>
                    <div className="w-96 text-center px-4 text-xs text-gray-800 truncate">image</div>
                </div>
                <div className="w-full max-h-80 overflow-auto ">
                {
                    props && props.map(
                        (data, index) => (
                            <div key={data.id} className="w-full flex justify-between items-center w-full text-center border-b">
                                <div className="w-28 text-center px-4 py-2 text-xs text-gray-800 truncate">{index}</div>
                                <div className="w-60 text-center px-4 text-xs text-gray-800 truncate">{data.mirror}</div>
                                <div className="w-80 text-center px-4 text-xs text-gray-800 truncate">{data.mirrorRegex}</div>
                                <div className="w-full text-center px-4 text-xs text-gray-800 truncate">{data.path}</div>
                                <div className="w-full text-center px-4 text-xs text-gray-800 truncate">{data.name}</div>
                                <div className="w-full text-center px-4 text-xs text-gray-800 truncate">{data.raw}</div>
                                <img className="w-96 text-center px-4 text-xs text-gray-800 truncate h-6" src={urlPath+"/"+data.name} alt="image"/>
                            </div>
                        )
                    )
                }
                </div>
                
            </div>
            
        </>
        
    )
}

export default ViewerListComponent;