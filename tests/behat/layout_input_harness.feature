@mod @mod_mootyper @javascript
Feature: MooTyper unique-script layout input harness
  In order to validate keyboard layouts for mostly unique alphabets
  As a teacher and student
  I need reusable Behat scenarios that verify key highlighting and typing progression with tiny lessons

  Background:
    Given the following "courses" exist:
      | fullname | shortname | category | groupmode |
      | Course 1 | C1 | 0 | 1 |
    And the following "users" exist:
      | username | firstname | lastname | email |
      | teacher1 | Teacher | 1 | teacher1@example.com |
      | student1 | Student | 1 | student1@example.com |
    And the following "course enrolments" exist:
      | user | course | role |
      | teacher1 | C1 | editingteacher |
      | student1 | C1 | student |

  Scenario Outline: Unique-script single-character harness validates highlighting and progression
    Given I log in as "teacher1"
    And I am on "Course 1" course homepage with editing mode on
    And I add a "MooTyper" to section "1" using the activity chooser
    And I set the following fields to these values:
      | Name        | <activityname>              |
      | Description | Behat harness for <layout> |
    And I click on "Save and display" "button"
    And the current mootyper uses layout "<layout>" with a tiny lesson "<lessonname>" containing "<texttotype>"
    And I log out

    When I am on the "<activityname>" "mootyper activity" page logged in as "student1"
    And I click on "#tb1" "css_element"
    Then the mootyper key "<expectedkey>" should be highlighted as next
    When I type "<texttotype>" in mootyper using simulated input
    Then mootyper progress should be complete

    Examples:
      | activityname              | layout             | lessonname             | texttotype | expectedkey |
      | MooTyper Cherokee Harness | Cherokee(CWYV5)    | Behat Cherokee tiny    | Ꭰ          | jkeya       |
      | MooTyper Hebrew Harness   | Hebrew(V5)dual     | Behat Hebrew tiny      | ש          | jkeyA       |
      | MooTyper Arabic Harness   | Arabic(ARV5)dual   | Behat Arabic tiny      | ش          | jkeyA       |
      | MooTyper Hindi Harness    | Hindi(HIV5)        | Behat Hindi tiny       | ओ          | jkeya       |
      | MooTyper Thai Harness     | Thai(V4)           | Behat Thai tiny        | ก          | jkeyd       |
      | MooTyper Russian Harness  | Russian(RUV5)      | Behat Russian tiny     | ф          | jkeyф       |
      | MooTyper Tamil Harness    | Tamil(V5)e         | Behat Tamil tiny       | அ          | jkeya       |
      | MooTyper Telugu Harness   | Telugu(V4)         | Behat Telugu tiny      | క          | jkeyk       |
      | MooTyper Maori Harness    | Maori(MRIV5)       | Behat Maori tiny       | ā          | jkeya       |

  Scenario: Amharic sequence-aware harness validates highlighting and progression
    Given I log in as "teacher1"
    And I am on "Course 1" course homepage with editing mode on
    And I add a "MooTyper" to section "1" using the activity chooser
    And I set the following fields to these values:
      | Name        | MooTyper Amharic Harness       |
      | Description | Behat harness for Amharic ETV7 |
    And I click on "Save and display" "button"
    And the current mootyper uses layout "Amharic(ETV7)" with a tiny lesson "Behat Amharic tiny" containing "ሀ"
    And I log out

    When I am on the "MooTyper Amharic Harness" "mootyper activity" page logged in as "student1"
    And I click on "#tb1" "css_element"
    Then the mootyper key "jkeyh" should be highlighted as next
    When I type "ሀ" in mootyper using simulated input
    Then mootyper progress should be complete

  Scenario: Edit form lesson switch refreshes exercise list
    Given I log in as "teacher1"
    And I am on "Course 1" course homepage with editing mode on
    And I add a "MooTyper" to section "1" using the activity chooser
    And I set the following fields to these values:
      | Name        | MooTyper Lesson Refresh Test             |
      | Description | Verify lesson switch refreshes exercises |
      | isexam      | Practice                                 |
      | Lesson name | Lesson 01                                |
    And I click on "Save and display" "button"
    And I navigate to "Settings" in current page administration
    Then the field "Lesson name" matches value "Lesson 01"
    When I change the mootyper lesson field to "Lesson 02" using javascript
    Then the mootyper exercise info should contain "5 Home row words"
    And the mootyper exercise info should not contain "5 Home row workout"
