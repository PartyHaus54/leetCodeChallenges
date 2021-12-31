    public int lengthOfLongestSubstring(String s) {
        int longestStringLength = 0;

        List<SubStringTuple> subStrings = new ArrayList<>();

        for (int index = 0; index < s.length(); index++) {
            String sCar = Character.toString(s.charAt(index));

            subStrings.forEach(subStringTuple -> {
                if (subStringTuple.active) {
                    if (!subStringTuple.car.contains(sCar)) {
                        subStringTuple.car += sCar;
                    } else {
                        subStringTuple.active = false;
                    }
                }
            });

            SubStringTuple nextTouple = new SubStringTuple(sCar);
            subStrings.add(nextTouple);
        }

        for (int index = 0; index < subStrings.size(); index++) {
            if (subStrings.get(index).car.length() > longestStringLength) {
                longestStringLength = subStrings.get(index).car.length();
            }
        }

        return longestStringLength;
    }

    public class SubStringTuple {
        String car;
        boolean active;
        SubStringTuple(String car) {
            this.car = car;
            this.active = true;
        }
    }