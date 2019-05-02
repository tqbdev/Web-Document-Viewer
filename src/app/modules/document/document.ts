import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

const googleDocs = 'https://docs.google.com/gview?embedded=true&url=';

import * as ext from 'ext-name';
import * as _ from 'lodash';
import { AppConstants } from '../../app.constant';

@Component({
    selector: 'sb-document',
    templateUrl: './document.html',
    styleUrls: ['./document.scss']
})
export class SbDocument implements OnInit {
    @ViewChild('pdfViewer') pdfViewer;

    fileURL: any;
    isPdf: any = true;
    constructor(private activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        // // console.log(this.activatedRoute.queryParams['value']);
        // const fileName = this.activatedRoute.queryParams['value'].file;
        // const extName = _.get(ext(fileName), '[0].ext');
        // this.isPdf = extName === 'pdf';
        // if (!this.isPdf) {
        //     // if (AppConstants.FILE_ENDPOINT) {
        //     //     this.fileURL = `${googleDocs}${
        //     //         AppConstants.FILE_ENDPOINT
        //     //     }${fileName}`;
        //     // } else {
        //     //     this.fileURL = `${googleDocs}${
        //     //         window.location.origin
        //     //     }/assets/${fileName}`;
        //     // }
        // } else {
        //     if (AppConstants.FILE_ENDPOINT) {
        //         this.fileURL = AppConstants.FILE_ENDPOINT + fileName;
        //     } else {
        //         this.fileURL = `/assets/${fileName}`;
        //     }
        // }
        const binaryHexStr =
            '0x255044462D312E330D0A25E2E3CFD30D0A0D0A312030206F626A0D0A3C3C0D0A2F54797065202F436174616C6F670D0A2F4F75746C696E65732032203020520D0A2F50616765732033203020520D0A3E3E0D0A656E646F626A0D0A0D0A322030206F626A0D0A3C3C0D0A2F54797065202F4F75746C696E65730D0A2F436F756E7420300D0A3E3E0D0A656E646F626A0D0A0D0A332030206F626A0D0A3C3C0D0A2F54797065202F50616765730D0A2F436F756E7420320D0A2F4B696473205B203420302052203620302052205D200D0A3E3E0D0A656E646F626A0D0A0D0A342030206F626A0D0A3C3C0D0A2F54797065202F506167650D0A2F506172656E742033203020520D0A2F5265736F7572636573203C3C0D0A2F466F6E74203C3C0D0A2F4631203920302052200D0A3E3E0D0A2F50726F635365742038203020520D0A3E3E0D0A2F4D65646961426F78205B302030203631322E30303030203739322E303030305D0D0A2F436F6E74656E74732035203020520D0A3E3E0D0A656E646F626A0D0A0D0A352030206F626A0D0A3C3C202F4C656E6774682031303734203E3E0D0A73747265616D0D0A32204A0D0A42540D0A30203020302072670D0A2F463120303032372054660D0A35372E33373530203732322E323830302054640D0A2820412053696D706C65205044462046696C65202920546A0D0A45540D0A42540D0A2F463120303031302054660D0A36392E32353030203638382E363038302054640D0A282054686973206973206120736D616C6C2064656D6F6E7374726174696F6E202E7064662066696C65202D202920546A0D0A45540D0A42540D0A2F463120303031302054660D0A36392E32353030203636342E373034302054640D0A28206A75737420666F722075736520696E20746865205669727475616C204D656368616E696373207475746F7269616C732E204D6F726520746578742E20416E64206D6F7265202920546A0D0A45540D0A42540D0A2F463120303031302054660D0A36392E32353030203635322E373532302054640D0A2820746578742E20416E64206D6F726520746578742E20416E64206D6F726520746578742E20416E64206D6F726520746578742E202920546A0D0A45540D0A42540D0A2F463120303031302054660D0A36392E32353030203632382E383438302054640D0A2820416E64206D6F726520746578742E20416E64206D6F726520746578742E20416E64206D6F726520746578742E20416E64206D6F726520746578742E20416E64206D6F7265202920546A0D0A45540D0A42540D0A2F463120303031302054660D0A36392E32353030203631362E383936302054640D0A2820746578742E20416E64206D6F726520746578742E20426F72696E672C207A7A7A7A7A2E20416E64206D6F726520746578742E20416E64206D6F726520746578742E20416E64202920546A0D0A45540D0A42540D0A2F463120303031302054660D0A36392E32353030203630342E393434302054640D0A28206D6F726520746578742E20416E64206D6F726520746578742E20416E64206D6F726520746578742E20416E64206D6F726520746578742E20416E64206D6F726520746578742E202920546A0D0A45540D0A42540D0A2F463120303031302054660D0A36392E32353030203539322E393932302054640D0A2820416E64206D6F726520746578742E20416E64206D6F726520746578742E202920546A0D0A45540D0A42540D0A2F463120303031302054660D0A36392E32353030203536392E303838302054640D0A2820416E64206D6F726520746578742E20416E64206D6F726520746578742E20416E64206D6F726520746578742E20416E64206D6F726520746578742E20416E64206D6F7265202920546A0D0A45540D0A42540D0A2F463120303031302054660D0A36392E32353030203535372E313336302054640D0A2820746578742E20416E64206D6F726520746578742E20416E64206D6F726520746578742E204576656E206D6F72652E20436F6E74696E756564206F6E20706167652032202E2E2E2920546A0D0A45540D0A656E6473747265616D0D0A656E646F626A0D0A0D0A362030206F626A0D0A3C3C0D0A2F54797065202F506167650D0A2F506172656E742033203020520D0A2F5265736F7572636573203C3C0D0A2F466F6E74203C3C0D0A2F4631203920302052200D0A3E3E0D0A2F50726F635365742038203020520D0A3E3E0D0A2F4D65646961426F78205B302030203631322E30303030203739322E303030305D0D0A2F436F6E74656E74732037203020520D0A3E3E0D0A656E646F626A0D0A0D0A372030206F626A0D0A3C3C202F4C656E67746820363736203E3E0D0A73747265616D0D0A32204A0D0A42540D0A30203020302072670D0A2F463120303032372054660D0A35372E33373530203732322E323830302054640D0A282053696D706C65205044462046696C652032202920546A0D0A45540D0A42540D0A2F463120303031302054660D0A36392E32353030203638382E363038302054640D0A28202E2E2E636F6E74696E7565642066726F6D207061676520312E20596574206D6F726520746578742E20416E64206D6F726520746578742E20416E64206D6F726520746578742E202920546A0D0A45540D0A42540D0A2F463120303031302054660D0A36392E32353030203637362E363536302054640D0A2820416E64206D6F726520746578742E20416E64206D6F726520746578742E20416E64206D6F726520746578742E20416E64206D6F726520746578742E20416E64206D6F7265202920546A0D0A45540D0A42540D0A2F463120303031302054660D0A36392E32353030203636342E373034302054640D0A2820746578742E204F682C20686F7720626F72696E6720747970696E6720746869732073747566662E20427574206E6F7420617320626F72696E67206173207761746368696E67202920546A0D0A45540D0A42540D0A2F463120303031302054660D0A36392E32353030203635322E373532302054640D0A28207061696E74206472792E20416E64206D6F726520746578742E20416E64206D6F726520746578742E20416E64206D6F726520746578742E20416E64206D6F726520746578742E202920546A0D0A45540D0A42540D0A2F463120303031302054660D0A36392E32353030203634302E383030302054640D0A2820426F72696E672E20204D6F72652C2061206C6974746C65206D6F726520746578742E2054686520656E642C20616E64206A7573742061732077656C6C2E202920546A0D0A45540D0A656E6473747265616D0D0A656E646F626A0D0A0D0A382030206F626A0D0A5B2F504446202F546578745D0D0A656E646F626A0D0A0D0A392030206F626A0D0A3C3C0D0A2F54797065202F466F6E740D0A2F53756274797065202F54797065310D0A2F4E616D65202F46310D0A2F42617365466F6E74202F48656C7665746963610D0A2F456E636F64696E67202F57696E416E7369456E636F64696E670D0A3E3E0D0A656E646F626A0D0A0D0A31302030206F626A0D0A3C3C0D0A2F43726561746F72202852617665205C28687474703A2F2F7777772E6E6576726F6E612E636F6D2F726176655C29290D0A2F50726F647563657220284E6576726F6E612044657369676E73290D0A2F4372656174696F6E446174652028443A3230303630333031303732383236290D0A3E3E0D0A656E646F626A0D0A0D0A787265660D0A302031310D0A3030303030303030303020363535333520660D0A30303030303030303139203030303030206E0D0A30303030303030303933203030303030206E0D0A30303030303030313437203030303030206E0D0A30303030303030323232203030303030206E0D0A30303030303030333930203030303030206E0D0A30303030303031353232203030303030206E0D0A30303030303031363930203030303030206E0D0A30303030303032343233203030303030206E0D0A30303030303032343536203030303030206E0D0A30303030303032353734203030303030206E0D0A0D0A747261696C65720D0A3C3C0D0A2F53697A652031310D0A2F526F6F742031203020520D0A2F496E666F203130203020520D0A3E3E0D0A0D0A7374617274787265660D0A323731340D0A2525454F460D0A';

        var hexStr = binaryHexStr.slice(2);
        var buf = new ArrayBuffer(hexStr.length / 2);
        var byteBuf = new Uint8Array(buf);
        for (let i = 0; i < hexStr.length; i += 2) {
            byteBuf[i / 2] = parseInt(hexStr.slice(i, i + 2), 16);
        }
        var blob = new Blob([byteBuf], { type: 'application/pdf' });
        // this.fileURL = blob;
        this.pdfViewer.pdfSrc = blob;
        this.pdfViewer.refresh();
    }
}
