package backend.entity;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;

import java.io.Serializable;


/*@JsonDeserialize
@JsonSerialize(as = Test.class)*/

public class Test implements Serializable {
  //  @JsonProperty("name")
    String name;
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
    @JsonCreator(mode = JsonCreator.Mode.PROPERTIES)
    public Test(@JsonProperty("name") String name) {
        this.name = name;
    }
}
