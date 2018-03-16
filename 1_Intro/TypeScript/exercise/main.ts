
// error TS1056: Accessors are only available when targeting ECMAScript 5 and higher.
// A compiler switch should be passed
// ~$ tsc *.ts --target ES5
import { LikeComponent } from './like.component';

let component = new LikeComponent(10, true);
component.onClick();
// The backtick (` `) operator is used to create a templeate string
console.log(`likesCount: ${component.likesCount}, isSelected: ${component.isSelected}`);