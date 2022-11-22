import { suite, test } from "@testdeck/jest"

import dayjs from "dayjs"
import monthWeek from "../src"

@suite
class TestSuite {

	before() {
		dayjs.extend(monthWeek)
	}

	@test
	test() {
		// 0..11 (0 = January)
		expect(dayjs(new Date(2023, 0, 1)).monthWeek()).toStrictEqual({ year: 2022, month: 11, week: 5 })
		expect(dayjs(new Date(2023, 0, 2)).monthWeek()).toStrictEqual({ year: 2023, month: 0, week: 1 })
		expect(dayjs(new Date(2022, 3, 29)).monthWeek()).toStrictEqual({ year: 2022, month: 3, week: 4 })
		expect(dayjs(new Date(2022, 4, 1)).monthWeek()).toStrictEqual({ year: 2022, month: 3, week: 4 })
		expect(dayjs(new Date(2022, 4, 2)).monthWeek()).toStrictEqual({ year: 2022, month: 4, week: 1 })
		expect(dayjs(new Date(2022, 4, 4)).monthWeek()).toStrictEqual({ year: 2022, month: 4, week: 1 })
		expect(dayjs(new Date(2022, 4, 10)).monthWeek()).toStrictEqual({ year: 2022, month: 4, week: 2 })
		expect(dayjs(new Date(2021, 0, 1)).monthWeek()).toStrictEqual({ year: 2020, month: 11, week: 5 })
	}
}
