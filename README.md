# dayjs-plugin-monthweek

Gets the week of the month.

## Usage

```
$ npm install dayjs-plugin-monthweek
```

```javascript
import dayjs from "dayjs"
import monthWeek from "dayjs-plugin-monthweek"

dayjs.extend(monthWeek)
```

### Get the week of the month

```javascript
dayjs(new Date(2023, 0, 1)).monthWeek() // { year: 2022, month: 11, week: 5 }
```
